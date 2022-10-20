import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";

export const navData = {
  items: [
    { href: "/", name: "Fő oldal" },
    { href: "/arak", name: "Árak" },
    { href: "/rolam", name: "Rólam" },
    { href: "/galeria", name: "Galéria" },
    { href: "/kapcsolat", name: "Kapcsolat" },
  ],
};
export const logo = "/img/logo/logo.jpg";

export const socialData = [
  {
    href: "https://www.facebook.com/robi.prainer.9",
    icon: <GrFacebookOption />,
  },
  {
    href: "https://www.instagram.com/barberblock_/",
    icon: <IoLogoInstagram />,
  },
];
