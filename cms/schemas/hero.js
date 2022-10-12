export default {
  name: "hero",
  title: "Fő feliratok",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Fő felírat",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Rövid Leírás",
      type: "text",
    },
    {
      name: "btnText",
      title: "Gomb Leírása",
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
