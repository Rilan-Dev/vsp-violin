import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { StudioLogin } from "@/components/site/studio-login";
import { StudioDashboard } from "@/components/site/studio-dashboard";

export const dynamic = "force-dynamic";

export default async function StudioPage() {
  const cookieStore = await cookies();
  const sbToken = cookieStore.get("sb-access-token")?.value;
  const staticToken = cookieStore.get("studio_token")?.value;
  const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";

  let isAuthed = false;

  // Check Supabase auth token
  if (sbToken) {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
      if (supabaseUrl && serviceKey) {
        const supabase = createClient(supabaseUrl, serviceKey, {
          auth: { persistSession: false },
        });
        const { data, error } = await supabase.auth.getUser(sbToken);
        if (!error && data.user) isAuthed = true;
      }
    } catch {}
  }

  // Fall back to static token (dev backwards-compat)
  if (!isAuthed && staticToken === STUDIO_TOKEN) isAuthed = true;

  if (!isAuthed) {
    return <StudioLogin />;
  }

  // Pass empty lessons array — the dashboard will fetch data client-side
  // This prevents server-side Prisma DB errors
  return <StudioDashboard lessons={[]} />;
}
