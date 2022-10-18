export default {
  name: "hero",
  title: "Fő oldal",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Fő Kép",
      type: "image",
    },
    {
      name: "title",
      title: "Fő felírat",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Hero Rövid Leírás",
      type: "text",
    },
    {
      name: "btnText",
      title: "Hero Gomb Leírása",
      type: "string",
    },
  ],
  initialValue: {
    title: "Sziasztok Prainer Robert vagyok",
    subtitle:
      "Ide valami megfogó szöveg kéne, ami felkelti a figyelmet, Igazából bármi lehet rajtad múlik ☝🏽😁💥",
    btnText: "Olvass Többet",
  },
};
