/**
 * Normalise an image URL so it actually renders in an <img>.
 *
 * Two things kept producing broken thumbnails:
 *
 * 1. **Google Drive share links.** Pasting a picture's "share" link gives
 *    `drive.google.com/file/d/<id>/view?usp=sharing`, which serves an HTML
 *    page, not an image — verified: that URL returns `text/html`, while
 *    `drive.google.com/thumbnail?id=<id>` returns `image/png` for the same
 *    file. Nothing about the share link looks wrong to the person pasting it,
 *    so this converts it rather than asking them to know the difference.
 *
 * 2. **Bare relative paths.** Legacy rows stored `images/gallery/x.webp` with
 *    no leading slash, so the browser resolved them against whatever path the
 *    page was on and 404'd.
 *
 * Deliberately NOT used for notation PDFs: there the `/view` link is the right
 * thing, because the visitor is opening a document, not embedding an image.
 */

/** Pull the file id out of any of Drive's URL shapes. */
function driveFileId(url: string): string | null {
  const patterns = [
    /drive\.google\.com\/file\/d\/([A-Za-z0-9_-]{10,})/,
    /drive\.google\.com\/open\?id=([A-Za-z0-9_-]{10,})/,
    /drive\.google\.com\/uc\?(?:[^#]*&)?id=([A-Za-z0-9_-]{10,})/,
    /drive\.google\.com\/thumbnail\?(?:[^#]*&)?id=([A-Za-z0-9_-]{10,})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

/**
 * @param url   the stored value, which may be empty
 * @param width requested width for Drive-hosted images
 */
export function resolveImageUrl(url: string | null | undefined, width = 1000): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  const id = driveFileId(trimmed);
  if (id) return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;

  // Absolute, protocol-relative, root-relative and data URLs are already fine.
  if (/^(https?:)?\/\//.test(trimmed) || trimmed.startsWith("/") || trimmed.startsWith("data:")) {
    return trimmed;
  }

  // Anything else is a bare relative path; anchor it at the site root.
  return `/${trimmed.replace(/^\.?\//, "")}`;
}
