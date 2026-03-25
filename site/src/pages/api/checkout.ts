import type { APIRoute } from "astro";

import { jsonError, jsonSuccess } from "../../lib/server/api-response";
import {
  getRuntimeEnvSource,
  resolveServerRuntimeConfig,
} from "../../lib/server/runtime-env";

export const POST: APIRoute = async ({ locals, request }) => {
  const runtime = resolveServerRuntimeConfig(getRuntimeEnvSource({ locals }));
  const payload = (await request.json().catch(() => null)) as
    | { planId?: unknown }
    | null;

  if (!payload || typeof payload.planId !== "string") {
    return jsonError("invalid_payload", "Expected a JSON body with a string planId.", {
      status: 400,
    });
  }

  const { planId } = payload;

  return jsonSuccess(
    {
      integrationMode: runtime.integrations.stripe.mode,
      planId,
      checkoutUrl: `${runtime.site.url}/pricing?plan=${encodeURIComponent(planId)}`,
      message:
        runtime.integrations.stripe.mode === "configured"
          ? "Stripe credentials are available. Replace this mock response with real session creation."
          : "Stripe is still mocked. This route preserves the future contract for checkout handoff.",
    },
    { status: 202 },
  );
};
