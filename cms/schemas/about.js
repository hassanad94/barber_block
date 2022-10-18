export default {
  name: "about",
  title: "Fő oldal Rólam Része",
  type: "document",
  fields: [
    {
      name: "aboutIMG",
      title: "Kép a szám mögött",
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
      name: "subtitle2",
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
    title: "Történetem",
    subtitle:
      "In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.",
    subtitle2:
      "Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.",
    btnText: "Ismerj Meg",
  },
};
