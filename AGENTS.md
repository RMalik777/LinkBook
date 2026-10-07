You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

## Project conventions (SvelteKit 3)

This project runs on SvelteKit 3 (Svelte 5, Vite 8, TypeScript 6) and deploys to Cloudflare Workers with `@sveltejs/adapter-cloudflare`. Some skill and reference docs in this repo (for example `.agents/skills/shadcn-svelte` and `.github/skills`) still show SvelteKit 2 patterns. Translate them to the rules below.

### Configuration

- Put all Svelte and SvelteKit config in `vite.config.ts`, as options of the `sveltekit({ ... })` plugin. Do not create `svelte.config.js`. SvelteKit 3 does not read it.
- `tsconfig.json` extends `$app/tsconfig`. Do not set `paths`, `types`, `isolatedModules` or `verbatimModuleSyntax` in it.

### Imports

- Use the `#lib` subpath import (declared in `package.json` `imports`), not `$lib`.
- Add the file extension to `#lib` imports: `#lib/utils.js` for a `.ts` file, `#lib/components/Foo.svelte` for a component.
- shadcn-svelte aliases in `components.json` use `#lib`. Generated components must import from `#lib/...`.

### SvelteKit APIs

- Use `$app/state` (`page`, `navigating`, `updated`). `$app/stores` was removed.
- Use `$app/env` instead of `$app/environment`. Use `$app/env/public` and `$app/env/private` instead of `$env/*`.
- Use `resolve()` and `asset()` from `$app/paths` for internal links and static assets. `base`, `assets` and `resolveRoute` were removed.
- `page.url` is read-only. Copy it with `new URL(page.url.href)` before you change it.
- Use `goto(url, { shallow: true, state })` instead of `pushState` / `replaceState`, and `refreshAll()` instead of `invalidateAll()`.
- Use `error(status, "message", { ...extra })`. The second argument must be a string.
- Use `Response.json(...)` and `new Response(text)` instead of the `json()` and `text()` helpers.
- To redirect to an external URL, pass `{ external: true }` to `redirect()`.
- Use `false`, not `"off"`, for `data-sveltekit-*` attributes.
- A module is server-only when its filename has a `.server` segment, its name is `server.ts`, or it is in any `server/` directory (outside `src/routes` and `static`).

### Cloudflare

- Read bindings with `import { env, waitUntil } from "cloudflare:workers"`, not from `event.platform`. `request.cf` and the global `caches` replace `platform.cf` and `platform.caches`.
- After you change `wrangler.jsonc`, run `pnpm cf-typegen` to regenerate `src/worker-configuration.d.ts`.

### Verification

Run `pnpm check`, `pnpm lint` and `pnpm build` after changes. All three must pass.
