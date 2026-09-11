import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase clients, created lazily.
 *
 * `createClient` throws "supabaseUrl is required" when the URL is missing, and
 * it used to run at module scope. Next.js evaluates route modules while
 * collecting page data during `next build`, so any build without Supabase
 * credentials in the environment died — not at request time, at build time.
 *
 * That went unnoticed because `.env` was committed to the repository, so CI
 * checked it out and Next loaded it automatically. Untracking `.env` (it
 * carried the service-role key) removed those credentials from CI and the
 * build started failing. The real defect is the eager construction: building
 * the app should never require live credentials, only running it should.
 *
 * These proxies defer construction to first use. A missing variable now fails
 * at the call site with a message naming what to set, instead of taking down
 * an unrelated build step.
 */

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is not set. Add it to your environment (see .env.example) — ` +
        `Supabase auth and the REST fallback cannot work without it.`
    );
  }
  return value;
}

/** Build a client on first property access, then reuse it. */
function lazyClient(factory: () => SupabaseClient): SupabaseClient {
  let client: SupabaseClient | null = null;
  return new Proxy({} as SupabaseClient, {
    get(_target, prop, receiver) {
      client ??= factory();
      const value = Reflect.get(client as object, prop, receiver);
      return typeof value === "function" ? value.bind(client) : value;
    },
  });
}

/** Anon client — safe for the browser, subject to RLS. */
export const supabase: SupabaseClient = lazyClient(() =>
  createClient(
    required("NEXT_PUBLIC_SUPABASE_URL"),
    required("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    { auth: { persistSession: true, autoRefreshToken: true } }
  )
);

/** Service-role client — bypasses RLS. Server-only; never import into a client component. */
export const supabaseServer: SupabaseClient = lazyClient(() =>
  createClient(
    required("NEXT_PUBLIC_SUPABASE_URL"),
    required("SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { persistSession: false } }
  )
);
