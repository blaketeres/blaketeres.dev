import m from "mithril";
import Base from "../components/base";
import Skills from "../components/skills";

const sections = [
  ["background", "#background"],
  ["skills", "#skills"],
  ["interests", "#interests"],
];

var AboutMeNav = {
  oninit: function (vnode) {
    vnode.state.sectionKey = "background";
  },
  view: function (vnode) {
    return m("nav.container-fluid", { style: "position: sticky; top: 80px;"}, [
      m("ul.list-unstyled.display-6", [
        sections.map((section, index) => {
          return m(
            "li", [
              m("a.pb-3",
                {
                  class:
                    vnode.state.sectionKey == section[0]
                      ? "nav-link active"  // TODO: make this work
                      : "nav-link",
                  href: "#/about-me/".concat(section[1]),
                },
                section[0]
              )
            ]
          );
        })
      ])
    ])
  },
};

export function view() {
  return m("main", [
    m(Base),
    m(
      "div",
      {
        class:
          "container-xxl d-flex align-items-center justify-content-center",
      },
      [
        m("div", { class: "row" }, [
          m("div", { class: "col col-sm-3 px-3" }, [
            m(AboutMeNav),
          ]),
          m("div", { class: "col" }, [m("div", { class: "px-3" }, [m(Skills)])]),
        ]),
      ]
    ),
  ]);
}
