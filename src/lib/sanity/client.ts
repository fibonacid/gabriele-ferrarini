import PicoSanity from "picosanity";

export const client = new PicoSanity({
  projectId: "3xwy9afs",
  dataset: "production",
  apiVersion: "2022-08-30", // use a UTC date string
  useCdn: true,
});
