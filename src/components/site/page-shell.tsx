import type { ReactNode } from "react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { getMegaMenu } from "@/lib/data";

/**
 * Shared page shell for dedicated pages — wraps content with the sticky Nav
 * (so users can switch between pages) and the Footer.
 *
 * The homepage doesn't use this — it has its own Nav + Footer composition
 * because it passes the megaMenu as a prop from the server component.
 */
export async function PageShell({ children }: { children: ReactNode }) {
  const megaMenu = await getMegaMenu();
  return (
    <>
      <Nav megaMenu={megaMenu} />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#16102A",
        }}
      >
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default PageShell;
