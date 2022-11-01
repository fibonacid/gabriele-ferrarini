import { useSanityClient } from "astro-sanity";
import Header from "../components/Header";

export async function get() {
  const publicUrl = import.meta.env.CANONICAL_URL || "http://localhost:3000";

  const pages: string[] = await useSanityClient().fetch(
    `*[_type == "page" && defined(slug.current)].slug.current`
  );

  const sitemap = `<!--?xml version="1.0" encoding="UTF-8"?-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${publicUrl}</loc>
  </url>
  ${pages
    .map(
      (slug) => `
      <url>
        <loc>${publicUrl + "/" + slug}</loc>
      </url>
    `
    )
    .join(" ")}
</urlset>`;

  const headers = new Headers();
  headers.append("Content-Type", "text/xml");

  return new Response(sitemap, {
    status: 200,
    headers,
  });
}
