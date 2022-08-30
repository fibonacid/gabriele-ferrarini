import { App } from "../../../app";
import { gallerySchema, makeList } from "../../../app.zod";
import { client } from "./client";

export const gallery = {
  async all(): Promise<App.List<App.Gallery>> {
    const query = /* groq */ `*[_type == "gallery"]`;
    const data = await client.fetch(query);
    return makeList(gallerySchema).parse(data);
  },
};
