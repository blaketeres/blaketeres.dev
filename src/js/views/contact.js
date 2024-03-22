import m from "mithril";
import Base from "../components/base";
import bootstrap from "bootstrap";

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

export function view() {
  return m("main", [
    m(Base),
    m(
      "div",
      {
        class: "container text-center mx-auto",
        style: "max-width: 650px;",
      },
      [
        m("p", "Let's chat! To set up some time to talk, shoot me an email. "),
        m("p", [
          m("b", { class: "font-monospace" }, myEmail),
          m(CopyEmailButton),
        ]),
        m("hr"),
      ]
    ),
  ]);
}
