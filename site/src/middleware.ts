import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const isLocalRequest = ["localhost", "127.0.0.1", "::1"].includes(url.hostname);

  if (url.protocol === "http:" && !isLocalRequest) {
    url.protocol = "https:";
    return Response.redirect(url, 301);
  }

  return next();
});
