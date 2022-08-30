import { App } from "../../../app";
import { gallerySchema, makeList } from "../../../app.zod";
import { client } from "./client";
import { galleryProjection } from "./projections";

export const gallery = {
  async all(): Promise<App.List<App.Gallery>> {
    const query = /* groq */ `*[_type == "gallery"]{ "key": _id, ...${galleryProjection} }`;
    const data = await client.fetch(query);
    console.log(data);
    return makeList(gallerySchema).parse(data);
  },
};
