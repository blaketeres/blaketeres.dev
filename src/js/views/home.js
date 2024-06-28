import m from "mithril";
import Base from "../components/base";


export function view() {
  return m("main", [
    m(Base),
    m(
      "div.container-sm",
      [
        m("h1.display-3.pb-5", "blake teres"),
        m("h2.h4", "software engineer"),
        m("h2.h4", "florida man"),
      ]
    ),
  ]);
}