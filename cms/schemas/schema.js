import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import logo from "./logo";
import hero from "./hero";
import about from "./about";
import mainGalery from "./mainGalery";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([logo, hero, about, mainGalery]),
});
