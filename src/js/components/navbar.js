import m from "mithril";
import Palm from "../../../static/palm.png";

const tabs = [["projects", "projects"]];

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
            ".navbar-nav.mx-auto.py-2",
            [
              m(
                "a.navbar-brand",
                { href: "#/home" },
                m("img.pe-2", { src: Palm, alt: "Palm", height: "24" })
              ),
            ].concat(
              tabs.map((tab, index) => {
                return m(
                  "a",
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
