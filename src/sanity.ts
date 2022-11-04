import imageUrlBuilder from "@sanity/image-url";
import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "3xwy9afs",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-11-01",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
