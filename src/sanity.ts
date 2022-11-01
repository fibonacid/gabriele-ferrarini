import {
  portableTextToHtml,
  useSanityClient,
  createImageBuilder,
} from "astro-sanity";

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source: any) {
  return imageBuilder.image(source);
}

/** @see https://github.com/portabletext/to-html */
const customComponents = {
  /* your custom components here */
  types: {
    image: ({ value }: any) => {
      return `
        <picture>
          <source
            srcset="${urlForImage(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class=""
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
            loading="lazy"
          />
        </picture>
      `;
    },
  },
};

export function sanityPortableText(portabletext: any) {
  console.log(portabletext);
  return portableTextToHtml(portabletext, customComponents);
}
