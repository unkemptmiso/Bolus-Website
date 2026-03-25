import type { APIRoute } from "astro";

import { footerNavigation, headerNavigation, secondaryPages } from "../../config/site-manifest";
import { jsonSuccess } from "../../lib/server/api-response";
import {
  getRuntimeEnvSource,
  resolveServerRuntimeConfig,
} from "../../lib/server/runtime-env";

export const GET: APIRoute = ({ locals }) => {
  const runtime = resolveServerRuntimeConfig(getRuntimeEnvSource({ locals }));

  return jsonSuccess({
    service: "bolus-website",
    status: "ok",
    integrations: runtime.integrations,
    navigation: {
      headerLinks: headerNavigation.length,
      footerGroups: footerNavigation.length,
    },
    routes: secondaryPages.map((page) => ({
      id: page.id,
      path: page.path,
    })),
  });
};
