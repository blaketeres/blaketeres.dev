import m from "mithril";
import Base from "../components/base";

var info = {
  name: "Blake Teres",
  description: [
    "I'm just a regular Florida dude who likes to code.",
    "I want to help those who are bettering the world.",
    "Reach out! Send me a message and say hi!",
  ],
};

var About = {
  view: function (vnode) {
    return m("div", [
      m(
        "article",
        info["description"].map((paragraph) => {
          return m("p", paragraph);
        })
      ),
    ]);
  },
};

var Content = {
  view: function (vnode) {
    return m(
      "",
      m("h1.display-3.pb-5", "blake teres"),
      m("div.pb-5", [
        m("h2.fs-4", "software engineer"),
        m("h2.fs-4", "florida man"),
      ]),
      m("div.pb-5", m(About))
    );
  },
};

export function view() {
  return m("main", [m(Base, [m(".text-center", m(Content))])]);
}
