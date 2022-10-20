import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import logo from "./logo";
import hero from "./hero";
import about from "./about";
import mainGalery from "./mainGalery";
import testimonials from "./testimonials";
import interview from "./interview";
import companyInfo from "./companyInfo";
import galeria from "./galeria";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    logo,
    hero,
    about,
    mainGalery,
    testimonials,
    interview,
    companyInfo,
    galeria,
  ]),
});
