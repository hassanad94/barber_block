export default {
  name: "mainGalery",
  title: "Fő oldal Galéria",
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
