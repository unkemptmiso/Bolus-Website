import type { APIContext } from "astro";
import { z } from "zod";

const optionalString = (min: number) =>
  z
    .string()
    .trim()
    .transform((v) => (v === "" ? undefined : v))
    .pipe(z.string().min(min).optional());

const runtimeEnvSchema = z.object({
  PUBLIC_SITE_URL: z.string().trim().url().default("https://bolusanesthesia.com"),
  PUBLIC_APP_STORE_URL: z
    .string()
    .trim()
    .url()
    .default("https://apps.apple.com/us/app/id0000000000"),
  AUTH_JWT_SECRET: optionalString(12),
  FIREBASE_PROJECT_ID: optionalString(2),
  WAITLIST_D1_BINDING: z.enum(["bound"]).optional(),
  STRIPE_SECRET_KEY: optionalString(5),
  STRIPE_WEBHOOK_SECRET: optionalString(5),
  WAITLIST_GOOGLE_SCRIPT_URL: z.string().trim().url().optional(),
});

export type ServerRuntimeConfig = {
  site: {
    url: string;
    appStoreUrl: string;
  };
  auth?: {
    jwtSecret: string;
  };
  firebase?: {
    projectId: string;
  };
  integrations: {
    waitlist: {
      mode: "none" | "local" | "configured";
      googleScriptUrl?: string;
    };
    stripe?: {
      secretKey: string;
      webhookSecret: string;
    };
  };
};

type RuntimeEnvSource = Record<string, unknown>;

export function getRuntimeEnvSource(overrides: Record<string, unknown> = {}): RuntimeEnvSource {
  return {
    PUBLIC_SITE_URL: overrides.PUBLIC_SITE_URL ?? import.meta.env.PUBLIC_SITE_URL,
    PUBLIC_APP_STORE_URL: overrides.PUBLIC_APP_STORE_URL ?? import.meta.env.PUBLIC_APP_STORE_URL,
    AUTH_JWT_SECRET: overrides.AUTH_JWT_SECRET ?? import.meta.env.AUTH_JWT_SECRET,
    FIREBASE_PROJECT_ID: overrides.FIREBASE_PROJECT_ID ?? import.meta.env.FIREBASE_PROJECT_ID,
    STRIPE_SECRET_KEY: overrides.STRIPE_SECRET_KEY ?? import.meta.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: overrides.STRIPE_WEBHOOK_SECRET ?? import.meta.env.STRIPE_WEBHOOK_SECRET,
    WAITLIST_GOOGLE_SCRIPT_URL:
      overrides.WAITLIST_GOOGLE_SCRIPT_URL ?? import.meta.env.WAITLIST_GOOGLE_SCRIPT_URL,
  };
}

export function resolveServerRuntimeConfig(source: RuntimeEnvSource): ServerRuntimeConfig {
  const result = runtimeEnvSchema.safeParse(source);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `[${issue.path.join(".")}] ${issue.message}`)
      .join(", ");
    throw new Error(`Runtime environment validation failed: ${issues}`);
  }

  const env = result.data;

  return {
    site: {
      url: env.PUBLIC_SITE_URL,
      appStoreUrl: env.PUBLIC_APP_STORE_URL,
    },
    auth: env.AUTH_JWT_SECRET
      ? {
          jwtSecret: env.AUTH_JWT_SECRET,
        }
      : undefined,
    firebase: env.FIREBASE_PROJECT_ID
      ? {
          projectId: env.FIREBASE_PROJECT_ID,
        }
      : undefined,
    integrations: {
      waitlist: {
        mode: env.WAITLIST_D1_BINDING || env.WAITLIST_GOOGLE_SCRIPT_URL ? "configured" : "none",
        googleScriptUrl: env.WAITLIST_GOOGLE_SCRIPT_URL,
      },
      stripe:
        env.STRIPE_SECRET_KEY && env.STRIPE_WEBHOOK_SECRET
          ? {
              secretKey: env.STRIPE_SECRET_KEY,
              webhookSecret: env.STRIPE_WEBHOOK_SECRET,
            }
          : undefined,
    },
  };
}
