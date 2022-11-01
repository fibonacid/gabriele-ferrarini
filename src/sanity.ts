import {
  portableTextToHtml,
  useSanityClient,
  createImageBuilder,
} from "astro-sanity";

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source: any) {
  return imageBuilder.image(source);
}

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
          />
        </picture>
      `;
    },
  },
};

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext, customComponents);
}
