import type { APIContext } from "astro";
import { z } from "zod";

const runtimeEnvSchema = z.object({
  PUBLIC_SITE_URL: z.url().default("https://bolus-site.invalid"),
  PUBLIC_APP_STORE_URL: z.url().default("https://apps.apple.com/us/app/id0000000000"),
  AUTH_JWT_SECRET: z.string().min(12).optional(),
  FIREBASE_PROJECT_ID: z.string().min(2).optional(),
  STRIPE_SECRET_KEY: z.string().min(5).optional(),
  STRIPE_WEBHOOK_SECRET: z.string().min(5).optional(),
});

export type RuntimeEnvSource = Partial<Record<keyof z.input<typeof runtimeEnvSchema>, string>>;

export interface ServerRuntimeConfig {
  site: {
    url: string;
    appStoreUrl: string;
  };
  integrations: {
    auth: {
      mode: "mock" | "configured";
      provider: "custom" | "firebase";
    };
    stripe: {
      mode: "mock" | "configured";
    };
    appHandoff: {
      mode: "mock" | "configured";
      downloadUrl: string;
    };
  };
}

function extractRuntimeEnv(locals: APIContext["locals"] | undefined): RuntimeEnvSource {
  const candidate = (locals as { runtime?: { env?: Record<string, unknown> } } | undefined)
    ?.runtime?.env;

  if (!candidate) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(candidate).filter((entry): entry is [string, string] => {
      return typeof entry[1] === "string";
    }),
  ) as RuntimeEnvSource;
}

export function getRuntimeEnvSource(context?: Pick<APIContext, "locals">): RuntimeEnvSource {
  const staticEnv = Object.fromEntries(
    Object.entries(import.meta.env).filter((entry): entry is [string, string] => {
      return typeof entry[1] === "string";
    }),
  ) as RuntimeEnvSource;

  return {
    ...staticEnv,
    ...extractRuntimeEnv(context?.locals),
  };
}

export function resolveServerRuntimeConfig(source: RuntimeEnvSource): ServerRuntimeConfig {
  const env = runtimeEnvSchema.parse(source);

  return {
    site: {
      url: env.PUBLIC_SITE_URL,
      appStoreUrl: env.PUBLIC_APP_STORE_URL,
    },
    integrations: {
      auth: {
        mode: env.AUTH_JWT_SECRET ? "configured" : "mock",
        provider: env.FIREBASE_PROJECT_ID ? "firebase" : "custom",
      },
      stripe: {
        mode:
          env.STRIPE_SECRET_KEY && env.STRIPE_WEBHOOK_SECRET ? "configured" : "mock",
      },
      appHandoff: {
        mode: "configured",
        downloadUrl: env.PUBLIC_APP_STORE_URL,
      },
    },
  };
}
