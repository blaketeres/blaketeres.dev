import m from "mithril";
import Palm from "../../../static/palm.png";

const tabs = ["projects", "misc"];

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
                {
                  href: "#",
                  class: activeTab == "" ? "nav-link active" : "nav-link",
                  "aria-current": activeTab == "" ? "page" : "false",
                },
                m("img.pe-2", { src: Palm, alt: "Palm", height: "24" })
              ),
            ].concat(
              tabs.map((tab) => {
                return m(
                  "a.pe-4",
                  {
                    href: "#/".concat(tab),
                    class: activeTab == tab ? "nav-link active" : "nav-link",
                    "aria-current": activeTab == tab ? "page" : "false",
                  },
                  tab
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
