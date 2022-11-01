const publicUrl = import.meta.env.VERCEL_URL || "http://127.0.0.1:3000";

export async function get() {
  return await fetch(publicUrl + "/studio/index.html");
}
