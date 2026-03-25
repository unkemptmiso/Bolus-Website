import type { APIRoute } from "astro";

import { jsonSuccess } from "../../../lib/server/api-response";
import {
  getRuntimeEnvSource,
  resolveServerRuntimeConfig,
} from "../../../lib/server/runtime-env";

export const GET: APIRoute = ({ locals }) => {
  const runtime = resolveServerRuntimeConfig(getRuntimeEnvSource({ locals }));

  return jsonSuccess({
    mode: runtime.integrations.auth.mode,
    provider: runtime.integrations.auth.provider,
    authenticated: false,
    message:
      runtime.integrations.auth.mode === "configured"
        ? "Auth credentials are present. Replace this placeholder with real session verification."
        : "Auth is still mocked. Add credentials and session verification when the app handoff is ready.",
  });
};
