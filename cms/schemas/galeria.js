export default {
  name: "galery",
  title: "Galéria Oldal Képei",
  type: "document",
  fields: [
    {
      name: "galery",
      title: "Galéria képei.",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
