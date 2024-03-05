import m from "mithril";
import Base from "../components/base";
import bootstrap from "../../../node_modules/bootstrap/dist/js/bootstrap";

const myEmail = "blaketeres@gmail.com";

var CopyEmailButton = {
  oninit: function (vnode) {
    vnode.state.btnClass = "bi bi-copy";
  },
  view: function (vnode) {
    return m(
      "button",
      {
        onclick: () => {
          navigator.clipboard.writeText(myEmail);
          vnode.state.btnClass = "bi bi-check text-success"
          setTimeout(() => {
            vnode.state.btnClass = "bi bi-copy";
            m.redraw();
          }, 1000)},
        class: "btn",
        "data-bs-toggle": "tooltip",
        "data-bs-title": "Default tooltip",
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
      { class: "container-sm pt-5"},
      [
        m("p", { class: "text-center" }, "Please send an email to ", [
          m("b", { class: "font-monospace" }, myEmail),
          m(CopyEmailButton),
        ]),
      ]
    ),
  ]);
}
