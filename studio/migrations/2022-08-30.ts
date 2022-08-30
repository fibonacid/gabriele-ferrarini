import sanityClient from "part:@sanity/base/client";
import { readdirSync, createReadStream } from "fs";
import { resolve, join, basename } from "path";

const client = sanityClient.withConfig({ apiVersion: "2022-08-30" });

const basePath = resolve(__dirname, "../../public/photos");
const files = readdirSync(resolve(__dirname, "../../public/photos")).map(
  (filename) => join(basePath, filename)
);

(async () => {
  const assets = [];

  await Promise.all(
    files.map((file) =>
      client.assets
        .upload("file", createReadStream(file), {
          filename: basename(file),
        })
        .then((document) => {
          console.log("The file was uploaded!", document);
          assets.push(document);
        })
        .catch((error) => {
          console.error("Upload failed:", error.message);
        })
    )
  );

  const gallery = await client.create({
    _type: "gallery",
    title: "Favorites",
    images: assets.map((document) => ({
      _type: "image",
      asset: {
        _type: "reference",
        _ref: document._id,
      },
    })),
  });

  console.log(gallery);
})();
