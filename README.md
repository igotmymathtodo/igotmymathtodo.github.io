# Teablox full-stack starter

This keeps the existing Teablox static website and adds the first backend endpoint needed by the uploaded Roblox launcher:

`GET /v1/settings/application?applicationName=PCDesktopClient`

The endpoint currently returns:

```json
[
  {
    "applicationSettings": {}
  }
]
```

The empty settings object is intentional. It lets us verify that the launcher can reach and parse the endpoint before we start adding compatibility flags.

## Cloudflare Pages deployment

Pages Functions use the `/functions` directory for file-based routes. Connect this project to a Git provider and deploy it as a Pages project. Direct Upload does not support Pages Functions.

After deployment, test:

`https://YOUR-PAGES-DOMAIN/v1/settings/application?applicationName=PCDesktopClient`

You should receive the JSON above.

## Important

Do not change `ReflectionMetadata.xml` just to point the schema URL at Teablox.

Do not disable Windows certificate/signature security checks. If the client still reports a trust error after the endpoint exists, we should diagnose the actual TLS/response validation path instead of bypassing security.

## Next endpoint

The uploaded launcher also contains `/v1/client-version/%s`. We should implement that only after confirming the exact installed client/version behavior, because returning made-up version identifiers can cause an update/version mismatch.
