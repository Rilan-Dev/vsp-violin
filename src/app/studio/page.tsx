import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { StudioLogin } from "@/components/site/studio-login";
import { StudioDashboard } from "@/components/site/studio-dashboard";
import { getAllLessonsForStudio } from "@/lib/data";

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
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
      );
      const { data, error } = await supabase.auth.getUser(sbToken);
      if (!error && data.user) isAuthed = true;
    } catch {}
  }

  // Fall back to static token (dev backwards-compat)
  if (!isAuthed && staticToken === STUDIO_TOKEN) isAuthed = true;

  if (!isAuthed) {
    return <StudioLogin />;
  }

  const lessons = await getAllLessonsForStudio();
  return <StudioDashboard lessons={lessons} />;
}
