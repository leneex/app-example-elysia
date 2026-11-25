# Elysia

Example [Elysia](https://elysiajs.com) web server running on [Bun](https://bun.sh). Elysia is a fast, type-safe TypeScript web framework designed for Bun. Bun is a fast all-in-one JavaScript runtime and package manager compatible with Node.js.

## Deploy settings

| Field | Value |
| --- | --- |
| Build | Railpack |
| Project directory | `/` |
| Install command | leave empty |
| Build command | leave empty |
| Start command | leave empty |
| Application port | `3000` |
| Health check path | `/` |

## <a name="dev"></a>Run locally

```bash
# dependencies
bun install

# run in development mode
bun run dev

# run as on the platform
bun run start
```

The app opens at `http://localhost:3000`. Requires Bun 1.4 or later.
