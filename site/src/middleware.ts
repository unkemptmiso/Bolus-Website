import { defineMiddleware } from "astro:middleware";

import { appStoreListingUrl } from "./config/site-manifest";

const retiredWaitlistPaths = new Set(["/waitlist", "/waitlist/", "/waitlist/index.html"]);

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const isLocalRequest = ["localhost", "127.0.0.1", "::1"].includes(url.hostname);

  if (retiredWaitlistPaths.has(url.pathname)) {
    return Response.redirect(appStoreListingUrl, 301);
  }

  if (url.protocol === "http:" && !isLocalRequest) {
    url.protocol = "https:";
    return Response.redirect(url, 301);
  }

  return next();
});
