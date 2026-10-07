export async function onRequestGet(context) {
  const applicationName =
    new URL(context.request.url).searchParams.get("applicationName") || "";

  const body = [
    {
      applicationSettings: {}
    }
  ];

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-teablox-application": applicationName
    }
  });
}
