const document = {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          fields: [],
        },
      ],
    },
  ],
};

export default document;
