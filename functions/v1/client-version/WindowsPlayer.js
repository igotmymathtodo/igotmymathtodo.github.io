export async function onRequestGet() {
  const body = [
    {
      version: "0.379.0.292444",
      clientVersionUpload: "version-b018edb462754b1c",
      bootstrapperVersion: "1, 6, 3, 292444"
    }
  ];

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}
