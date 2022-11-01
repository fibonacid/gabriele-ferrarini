export default {
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Website Title",
      type: "string",
      validation: (Rule: any) =>
        Rule.max(50).warning(
          "Longer titles may be truncated by search engines"
        ),
    },
    {
      name: "description",
      title: "Website Description",
      type: "text",
      rows: 2,
      validation: (Rule: any) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by search engines"
        ),
    },
    {
      name: "image",
      title: "Website Image",
      type: "image",
      description: "Recommended size is 1200 x 630px",
    },
    {
      name: "footerText",
      title: "Footer Text",
      type: "string",
    },
  ],
};
