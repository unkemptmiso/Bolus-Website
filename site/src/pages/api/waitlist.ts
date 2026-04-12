import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { ZodError } from "zod";

import { jsonError, jsonSuccess } from "../../lib/server/api-response";
import {
  getRuntimeEnvSource,
  resolveServerRuntimeConfig,
} from "../../lib/server/runtime-env";
import {
  appendWaitlistSubmission,
  parseWaitlistSubmission,
  type WaitlistDatabase,
} from "../../lib/server/waitlist";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const cloudflareEnv = env as { WAITLIST_DB?: WaitlistDatabase };
  const runtimeEnv = {
    ...getRuntimeEnvSource(cloudflareEnv),
    WAITLIST_D1_BINDING: cloudflareEnv.WAITLIST_DB ? "bound" : undefined,
  };
  const database = cloudflareEnv.WAITLIST_DB ?? null;
  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!payload) {
    return jsonError("invalid_payload", "Expected a JSON request body.", { status: 400 });
  }

  try {
    const runtime = resolveServerRuntimeConfig(runtimeEnv);

    if (runtime.integrations.waitlist.mode !== "configured") {
      return jsonError("waitlist_unavailable", "The waitlist integration is not configured yet.", {
        status: 503,
      });
    }

    const submission = parseWaitlistSubmission(payload);
    await appendWaitlistSubmission(database, submission, {
      googleScriptUrl: runtime.integrations.waitlist.googleScriptUrl,
    });

    return jsonSuccess({ status: "submitted" }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return jsonError("invalid_payload", error.issues[0]?.message ?? "Invalid waitlist data.", {
        status: 400,
      });
    }

    const message = error instanceof Error ? error.message : "Could not save the waitlist submission.";
    return jsonError("waitlist_append_failed", message, { status: 502 });
  }
};
