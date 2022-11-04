import { toHTML } from "@portabletext/to-html";
import { urlFor } from "./sanity";

/** @see https://github.com/portabletext/to-html */
const customComponents = {
  /* your custom components here */
  types: {
    image: ({ value }: any) => {
      return `
        <picture>
          <source
            srcset="${urlFor(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class=""
            src="${urlFor(value.asset).url()}"
            alt="${value.alt}"
            loading="lazy"
          />
        </picture>
      `;
    },
  },
};

export function sanityPortableText(portabletext: any) {
  return toHTML(portabletext, { components: customComponents });
}
