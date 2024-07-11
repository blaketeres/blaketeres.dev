import m from "mithril";

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

var ContactBar = {
  view: function (vnode) {
    return m(".pt-3.pb-3.text-center", [
      m("div.d-inline-flex", [
        m("p.my-auto", myEmail),
        m(CopyEmailButton),
        m("p.my-auto.px-4", "⫽"),
        m("a", { href: "https://github.com/blaketeres" }, [
          m("button.btn", [m("i.bi.bi-github")]),
        ]),
        m("a", { href: "https://www.linkedin.com/in/blake-teres/" }, [
          m("button.btn", [m("i.bi.bi-linkedin")]),
        ]),
        m("a", { href: "https://stackoverflow.com/users/7559627/blake" }, [
          m("button.btn", [m("i.bi.bi-stack-overflow")]),
        ]),
      ]),
    ]);
  },
};

export default ContactBar;
