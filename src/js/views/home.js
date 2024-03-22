import m from "mithril";
import Base from "../components/base"


const header = "software built for you";
const subtext1 = (
  "<name> is a multidisciplinary software engineering shop, \
   proficient in web development, data processing, and tech strategy."
)
const subtext2 = (
   "<name> has a dream to improve our world, and is committed to working \
   for those who share the same dream."
);

export function view() {
  return m("main", [
    m(Base),
    m(
      "div.container-sm.text-center.mx-auto",
      [
        m("h1.display-3.pt-5", header),
        m("h2.h4.pt-5", subtext1),
        m("h2.h4.pt-5", subtext2),
      ]
    ),
  ]);
}