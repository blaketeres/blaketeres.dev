import m from "mithril";
import Base from "../components/base";

const myEmail = "blaketeres@gmail.com";

var CopyEmailButton = {
  oninit: function (vnode) {
    vnode.state.btnClass = "bi bi-copy";
  },
  view: function (vnode) {
    return m(
      "button.btn",
      {
        onclick: () => {
          navigator.clipboard.writeText(myEmail);
          vnode.state.btnClass = "bi bi-check text-success";
          setTimeout(() => {
            vnode.state.btnClass = "bi bi-copy";
            m.redraw();
          }, 1000);
        },
      },
      [m("i", { class: vnode.state.btnClass })]
    );
  },
};

var info = {
  name: "Blake Teres",
  description: [
    "I'm just a regular Florida dude who likes to code.",
    "I use Python because that's what I know best, but whatever gets the job done will do.",
    "My perfect day includes sipping a blackberry margarita on the beach with my wife and my dog (see dog pictures below).",
    "Highlights of my experience: GIS, backend web dev, computational geometry, acoustic signal processing, \
    cloud services, and a bunch of other stuff.",
    "I want to help those who are bettering the world.",
    "Reach out! Send me a message and say hi!"
  ],
  github: "https://github.com/blaketeres",
  linkedin: "https://www.linkedin.com/in/blake-teres/",
  stackoverflow: "https://stackoverflow.com/users/7559627/blake",
  email: myEmail,
};

var About = {
  view: function (vnode) {
    return m("div", [
      m(
        "article.pb-5",
        info["description"].map((paragraph) => {
          return m("p", paragraph);
        })
      ),
      m("div.d-inline-flex", [
        m("p.font-monospace.my-auto", info["email"]),
        m(CopyEmailButton),
        m("p.ps-5.my-auto.pe-5", "⋰"),
        m("a.my-auto", { href: info["github"] }, [
          m("button.btn", [m("i.bi.bi-github")]),
        ]),
        m("a.my-auto", { href: info["linkedin"] }, [
          m("button.btn", [m("i.bi.bi-linkedin")]),
        ]),
        m("a.my-auto", { href: info["stackoverflow"] }, [
          m("button.btn", [m("i.bi.bi-stack-overflow")]),
        ]),
      ]),
    ]);
  },
};

export function view() {
  return m("main", [
    m(Base),
    m("div.container-sm", [m("h1.display-3.pb-5", "about"), m(About)]),
  ]);
}
