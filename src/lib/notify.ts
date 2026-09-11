/**
 * Enquiry notification.
 *
 * The site promises "a reply usually comes within two days", but nothing
 * told Violin Suka Pavalan an enquiry had arrived — leads sat in the database until
 * someone happened to open /studio. This sends a plain email on each new
 * enquiry via the Resend HTTP API (no SDK, no extra dependency).
 *
 * Configuration is optional by design. If RESEND_API_KEY or ENQUIRY_NOTIFY_TO
 * is missing, notification is skipped and logged — it must never be able to
 * fail the enquiry itself, which has already been saved by the time this runs.
 */

type EnquiryLike = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  city?: string | null;
  intent: string;
  instrument?: string | null;
  level?: string | null;
  whoFor?: string | null;
  message: string;
};

const INTENT_LABEL: Record<string, string> = {
  lesson: "One-to-one lessons",
  booking: "Performance booking",
  collaboration: "Collaboration",
};

function plainBody(e: EnquiryLike): string {
  const rows: Array<[string, string | null | undefined]> = [
    ["Name", e.name],
    ["Email", e.email],
    ["Phone", e.phone],
    ["City / timezone", e.city],
    ["Interest", INTENT_LABEL[e.intent] ?? e.intent],
    ["Who it's for", e.whoFor],
    ["Instrument", e.instrument],
    ["Level", e.level],
  ];
  const details = rows
    .filter(([, v]) => v != null && v !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return `New enquiry from the website.\n\n${details}\n\nMessage:\n${e.message}\n\n— Reply directly to this email to reach them.\nReference: ${e.id}`;
}

/**
 * Send the notification. Resolves to true if an email was actually sent.
 * Never throws — every failure path is caught and logged.
 */
export async function notifyNewEnquiry(enquiry: EnquiryLike): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_NOTIFY_TO;
  // Resend requires a verified sender domain; fall back to their shared
  // onboarding sender so this works before DNS verification is done.
  const from = process.env.ENQUIRY_NOTIFY_FROM ?? "Violin Suka Pavalan <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn(
      `[notify] Enquiry ${enquiry.id} saved but NOT emailed — ` +
        `set RESEND_API_KEY and ENQUIRY_NOTIFY_TO to enable notifications.`
    );
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `New enquiry — ${enquiry.name} (${INTENT_LABEL[enquiry.intent] ?? enquiry.intent})`,
        text: plainBody(enquiry),
      }),
    });
    if (!res.ok) {
      console.error(
        `[notify] Resend rejected enquiry ${enquiry.id}: ${res.status} ${await res
          .text()
          .catch(() => "")}`
      );
      return false;
    }
    return true;
  } catch (e) {
    console.error(`[notify] Could not email enquiry ${enquiry.id}:`, e);
    return false;
  }
}
