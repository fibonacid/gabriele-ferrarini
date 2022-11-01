const crawlableRobotsTxt = `User-agent: *
Allow: /
`;

const uncrawlableRobotsTxt = `User-agent: *
Disallow: /
`;

export async function get() {
  const robots =
    import.meta.env.VERCEL_ENV === "production"
      ? crawlableRobotsTxt
      : uncrawlableRobotsTxt;

  const headers = new Headers();
  headers.append("Content-Type", "text/plain");

  return new Response(robots, {
    status: 200,
    headers,
  });
}
