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
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

var NavBar = {
  view: function (vnode) {
    let activeTab = m.route.get();

    return m("nav.navbar.navbar-expand-sm.bg-body-tertiary.sticky-top", [
      m(".container-fluid", [
        m(
          "button.navbar-toggler",
          {
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
          },
          [m("span.navbar-toggler-icon")]
        ),
        m("div.collapse.navbar-collapse", { id: "navbarSupportedContent" }, [
          m(
            ".navbar-nav.mx-auto",
            [m("a.navbar-brand.px-4", { href: "#/home" }, "BT")].concat(
              tabs.map((tab, index) => {
                return m(
                  "a.px-3",
                  {
                    class: activeTab == tab[1] ? "nav-link active" : "nav-link",
                    "aria-current": activeTab == tab[1] ? "page" : "false",
                    href: "#/".concat(tab[1]),
                  },
                  tab[0]
                );
              })
            )
          ),
        ]),
      ]),
    ]);
  },
};

export default NavBar;
