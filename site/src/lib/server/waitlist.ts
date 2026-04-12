import { z } from "zod";

const referralSourceSchema = z.enum([
  "instagram",
  "facebook",
  "google-search",
  "ai-recommendation",
  "colleague",
  "my-practice",
  "conference",
  "podcast",
  "email",
  "other",
]);

const waitlistSubmissionSchema = z
  .object({
    name: z.string().trim().min(1),
    email: z.email().trim(),
    practiceName: z.string().trim().min(1),
    referralSource: referralSourceSchema,
    referralSourceOther: z.string().trim().optional().default(""),
    comments: z.string().trim().optional().default(""),
  })
  .superRefine((value, ctx) => {
    if (value.referralSource === "other" && value.referralSourceOther.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["referralSourceOther"],
        message: "Please tell us how you heard about Bolus.",
      });
    }
  });

export type WaitlistSubmission = z.infer<typeof waitlistSubmissionSchema>;

interface WaitlistStatementResult {
  success?: boolean;
}

interface WaitlistPreparedStatement {
  bind(...values: unknown[]): {
    run(): Promise<WaitlistStatementResult>;
  };
}

export interface WaitlistDatabase {
  prepare(query: string): WaitlistPreparedStatement;
}

export function parseWaitlistSubmission(payload: unknown): WaitlistSubmission {
  return waitlistSubmissionSchema.parse(payload);
}

export function formatWaitlistRow(
  submission: WaitlistSubmission,
  submittedAt: string,
): string[] {
  return [
    submittedAt,
    submission.name,
    submission.email,
    submission.practiceName,
    submission.referralSource,
    submission.referralSourceOther,
    submission.comments,
  ];
}

export async function sendToGoogleSheets(
  url: string,
  submission: WaitlistSubmission,
): Promise<void> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Sheets append failed: ${response.status} ${errorText}`);
  }

  const result = (await response.json()) as { ok: boolean; error?: string };
  if (!result.ok) {
    throw new Error(`Google Sheets append failed: ${result.error ?? "Unknown error"}`);
  }
}

export async function appendWaitlistSubmission(
  database: WaitlistDatabase | null,
  submission: WaitlistSubmission,
  options?: { googleScriptUrl?: string },
): Promise<void> {
  const submittedAt = new Date().toISOString();
  const errors: Error[] = [];

  // Append to D1 if database is provided
  if (database) {
    try {
      const result = await database
        .prepare(
          `insert into waitlist_signups (
            submitted_at,
            name,
            email,
            practice_name,
            referral_source,
            referral_source_other,
            comments
          ) values (?, ?, ?, ?, ?, ?, ?)`,
        )
        .bind(
          submittedAt,
          submission.name,
          submission.email,
          submission.practiceName,
          submission.referralSource,
          submission.referralSourceOther,
          submission.comments,
        )
        .run();

      if (result.success === false) {
        errors.push(new Error("Could not append the waitlist submission to D1."));
      }
    } catch (error) {
      errors.push(error instanceof Error ? error : new Error(String(error)));
    }
  }

  // Append to Google Sheets if URL is provided
  if (options?.googleScriptUrl) {
    try {
      await sendToGoogleSheets(options.googleScriptUrl, submission);
    } catch (error) {
      errors.push(error instanceof Error ? error : new Error(String(error)));
    }
  }

  if (errors.length > 0) {
    // If we have multiple errors, we could combine them, but for now we'll just throw the first one
    // or a generic one if we prefer.
    throw new Error(errors.map((e) => e.message).join(" | "));
  }
}
