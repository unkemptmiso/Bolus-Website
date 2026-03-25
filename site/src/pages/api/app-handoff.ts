import type { APIRoute } from "astro";

import { jsonError, jsonSuccess } from "../../lib/server/api-response";
import {
  getRuntimeEnvSource,
  resolveServerRuntimeConfig,
} from "../../lib/server/runtime-env";

const allowedDestinations = new Set(["download", "login", "dashboard"]);

export const GET: APIRoute = ({ locals }) => {
  const runtime = resolveServerRuntimeConfig(getRuntimeEnvSource({ locals }));

  return jsonSuccess({
    destinations: {
      download: runtime.integrations.appHandoff.downloadUrl,
      login: `${runtime.site.url}/login`,
      dashboard: `${runtime.site.url}/app`,
    },
  });
};

export const POST: APIRoute = async ({ locals, request }) => {
  const runtime = resolveServerRuntimeConfig(getRuntimeEnvSource({ locals }));
  const payload = (await request.json().catch(() => null)) as
    | { destination?: unknown }
    | null;

  if (!payload || typeof payload.destination !== "string") {
    return jsonError(
      "invalid_payload",
      "Expected a JSON body with a destination of download, login, or dashboard.",
      { status: 400 },
    );
  }

  if (!allowedDestinations.has(payload.destination)) {
    return jsonError("invalid_destination", "Unsupported app handoff destination.", {
      status: 400,
    });
  }

  const { destination } = payload;

  const target =
    destination === "download"
      ? runtime.integrations.appHandoff.downloadUrl
      : destination === "login"
        ? `${runtime.site.url}/login`
        : `${runtime.site.url}/app`;

  return jsonSuccess({
    destination,
    target,
    mode: runtime.integrations.appHandoff.mode,
  });
};
