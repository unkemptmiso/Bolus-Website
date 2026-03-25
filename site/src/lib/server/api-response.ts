export interface ApiEnvelope<T> {
  ok: true;
  generatedAt: string;
  data: T;
}

export interface ApiErrorEnvelope {
  ok: false;
  generatedAt: string;
  error: {
    code: string;
    message: string;
  };
}

export function jsonSuccess<T>(data: T, init?: ResponseInit): Response {
  const envelope: ApiEnvelope<T> = {
    ok: true,
    generatedAt: new Date().toISOString(),
    data,
  };

  return Response.json(envelope, {
    ...init,
    headers: {
      "cache-control": "no-store",
      ...(init?.headers ?? {}),
    },
  });
}

export function jsonError(
  code: string,
  message: string,
  init?: ResponseInit,
): Response {
  const envelope: ApiErrorEnvelope = {
    ok: false,
    generatedAt: new Date().toISOString(),
    error: {
      code,
      message,
    },
  };

  return Response.json(envelope, {
    status: init?.status ?? 400,
    ...init,
    headers: {
      "cache-control": "no-store",
      ...(init?.headers ?? {}),
    },
  });
}
