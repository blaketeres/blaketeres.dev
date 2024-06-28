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
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque dapibus augue sed neque. Duis ligula sem, \
    commodo vel, pellentesque vitae, gravida et, eros. Aliquam pellentesque nulla non lacus. Quisque at lorem ac \
    mauris accumsan pulvinar. Vivamus bibendum turpis id augue. ",
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
        // m("h3", info["name"]),
        // m("p.ps-5.my-auto.pe-5", "⋰"),
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
