import m from "mithril";
import Base from "../components/base";

// build APIs
// build websites
// mobile apps
// front-end development (pending participation from my friends)
// back-end development
// process, clean, and publish data
// GIS processing
// code refactoring and optimization
// start new projects
// complete unfinished projects
// maintain projects over time
// cloud services
// code testing
// deployment pipelines
// python development


const services = [
  {
    name: "api development",
    pane: [
    ]
  },
  {
    name: "website development",
    pane: [
    ]
  },
  {
    name: "database design",
    pane: [
    ]
  },
  {
    name: "data processing",
    pane: [
    ]
  },
  {
    name: "data visualization",
    pane: [
    ]
  },
  // {
  //   name: "python development",
  //   // TODO: add links to each of these software
  //   pane: [
  //     m("h2.display-5", "API Development"),
  //     m("p.h3", ""),
  //     m("div.container", [
  //       m("div.row", [
  //         m("div.col", [
  //           m("h3", "web frameworks"),
  //           m("ul", [
  //             m("li", m("code", "Django Rest Framework")),
  //             m("li", m("code", "FastAPI")),
  //             m("li", m("code", "Flask")),
  //           ]),
  //         ]),
  //         m("div.col", [
  //           m("h3", "databases"),
  //           m("ul", [
  //             m("li", m("code", "SQL/PostGIS")),
  //             m("li", m("code", "Django")),
  //             m("li", m("code", "SQLAlchemy")),
  //             m("li", m("code", "PeeWee")),
  //           ]),
  //         ]),
  //         m("div.col", [
  //           m("h3", "scientific"),
  //           m("ul", [
  //             m("li", m("code", "NumPy/SciPy")),
  //             m("li", m("code", "pandas")),
  //             m("li", m("code", "Shapely")),
  //             m("li", m("code", "plotly")),
  //           ]),
  //         ]),
  //       ]),
  //       m("div.row", [
  //         m("div.col", [
  //           m("h3", "packaging"),
  //           m("ul", [
  //             m("li", m("code", "pytest")),
  //             m("li", m("code", "coverage")),
  //             m("li", m("code", "tox")),
  //             m("li", m("code", "PyPi")),
  //             m("li", m("code", "Poetry")),
  //           ]),
  //         ]),
  //         m("div.col", [
  //           m("h3", "PDF generation"),
  //           m("ul", [m("li", m("code", "fpdf2"))]),
  //         ]),
  //         m("div.col", []),
  //       ]),
  //     ]),
  //   ],
  // },
  // {
  //   name: "tutoring",
  //   pane: m(
  //     "p",
  //     "Looking for 1-on-1 sessions? ",
  //     m("a", { href: "#/contact" }, "Contact us"),
  //     " to learn more."
  //   ),
  // },
];

var Services = {
  oninit: function (vnode) {
    vnode.state.activeIndex = 0;
  },
  view: function (vnode) {
    return m(
      "div.row",
      m("div.col-3", [
        m(
          "div.list-group.list-group-flush",
          { role: "tablist" },
          services.map((service, index) => {
            return [
              m(
                "button.list-group-item.list-group-item-action",
                {
                  class: index == vnode.state.activeIndex ? "active" : "",
                  onclick: (el) => {
                    vnode.state.activeIndex = [
                      ...el.target.parentNode.children,
                    ].indexOf(el.target);
                  },
                },
                service["name"]
              ),
            ];
          })
        ),
      ]),
      m("div.col-9", { id: "services-content" }, [
        m(
          "div.tab-content",
          services.map((service, index) => {
            return [
              m(
                "div.tab-pane",
                {
                  class: index == vnode.state.activeIndex ? "show active" : "",
                },
                m("article", service["pane"])
              ),
            ];
          })
        ),
      ])
    );
  },
};

export function view() {
  return m("main", [
    m(Base),
    m("div.container-sm", [m("h1.fs-3.pb-5", "services"), m(Services)]),
  ]);
}
