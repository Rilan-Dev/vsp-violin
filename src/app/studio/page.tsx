import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { StudioLogin } from "@/components/site/studio-login";
import { StudioDashboard } from "@/components/site/studio-dashboard";
import { getLessons } from "@/lib/data";

export const dynamic = "force-dynamic";

const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";

export default async function StudioPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("studio_token")?.value;
  const isAuthed = token === STUDIO_TOKEN;

  if (!isAuthed) {
    return <StudioLogin />;
  }

  const lessons = await getLessons();
  return <StudioDashboard lessons={lessons} />;
}
