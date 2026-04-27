import type { APIRoute } from "astro";

import { jsonSuccess } from "../../../lib/server/api-response";
import {
  getRuntimeEnvSource,
  resolveServerRuntimeConfig,
} from "../../../lib/server/runtime-env";

export const GET: APIRoute = ({ locals }) => {
  const runtime = resolveServerRuntimeConfig(getRuntimeEnvSource({ locals }));
  const mode = runtime.auth ? "configured" : "mocked";

  return jsonSuccess({
    mode,
    provider: "firebase",
    authenticated: false,
    message:
      mode === "configured"
        ? "Auth credentials are present. Replace this placeholder with real session verification."
        : "Auth is still mocked. Add credentials and session verification when the app handoff is ready.",
  });
};
