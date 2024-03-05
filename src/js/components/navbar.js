import m from "mithril";

var DarkModeSwitch = {
  oninit: function (vnode) {
    vnode.state.enabled = vnode.attrs.enabled;
  },
  view: function (vnode) {
    var icon = vnode.state.enabled ? "🌙" : "☀️";

    return m(
      "a",
      {
        class: "button-outline",
        href: "javascript:void(0)",
        onclick: (el) => {
          el.enabled = !el.enabled;
        },
      },
      icon
    );
  },
};

const tabs = [
  ["About Me", "/about-me"],
  ["Projects", "/projects"],
  ["Hire Me", "/hire-me"],
];

var NavBar = {
  view: function (vnode) {
    let activeTab = m.route.get();

    return m("div", { class: "navbar navbar-expand-sm bg-body-tertiary" }, [
      m("div", { class: "container-fluid" }, [
        m(
          "button",
          {
            class: "navbar-toggler",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
          },
          [m("span", { class: "navbar-toggler-icon" })]
        ),
        m(
          "div",
          { class: "collapse navbar-collapse", id: "navbarSupportedContent" },
          [
            m(
              "div",
              { class: "navbar-nav mx-auto" },
              [m("a", { class: "navbar-brand", href: "#/home" }, "Home")],
              tabs.map((tab, index) => {
                return m(
                  "a",
                  {
                    class: activeTab == tab[1] ? "nav-link active" : "nav-link",
                    "aria-current": activeTab == tab[1] ? "page" : "false",
                    href: "#".concat(tab[1]),
                  },
                  tab[0]
                );
              })
            ),
          ]
        ),
      ]),
    ]);
  },
};

export default NavBar;
