import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const page = {
  name: "page",
  title: "Page",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "page" }),
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Heading", value: "h3" },
            { title: "Normal", value: "normal" },
          ],
        },
        { type: "image" },
      ],
    },
  ],
};

export default page;
