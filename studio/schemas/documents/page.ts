const page = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
