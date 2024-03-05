import m from "mithril";
import Base from "../components/base";
import Skills from "../components/skills";

const sections = [
  ["background", "#background"],
  ["skills", "#skills"],
  ["interests", "#interests"],
];

// const skills = [
//   ["Python", 0.98, "10+ years experience"],
//   ["Backend Web Dev", 0.98, "6+ years experience"],
//   ["Frontend Web Dev", 0.1, "I'm still learning"],
//   ["GIS", 0.5, "I dabble"],
//   ["Signal Processing", 0.25, "I've dabbled, but it's been a while"],
// ]

// var Skills = {
//   view: function (vnode) {
//     return m("div", [
//       skills.map((skill, index) => {
//         return m("p", skill[0].concat(" | ").concat(skill[2]));
//       })
//     ]);
//   }
// }

var AboutMeNav = {
  oninit: function (vnode) {
    vnode.state.sectionKey = "background";
  },
  view: function (vnode) {
    return m("nav", [
      m("a", { class: "navbar-brand", href: "#" }, [
        sections.map((section, index) => {
          return m(
            "a",
            {
              class:
                vnode.state.sectionKey == section[0]
                  ? "nav-link active"
                  : "nav-link",
              href: "#/about-me/".concat(section[1]),
            },
            section[0]
          );
        }),
      ]),
    ]);
  },
};

export function view() {
  return m("main", [
    m(Base),
    m("div", { class: "container" }, [
      m("div", { class: "container-sm d-flex align-items-center justify-content-center" }, [
        m("div", { class: "row" }, [
          m("div", { class: "col col-sm-2" }, [
            m("div", { class: "p-3" }, [m(AboutMeNav)]),
          ]),
          m("div", { class: "col col-lg-6" }, [m("div", { class: "p-3" }, [m(Skills)])]),
        ]),
      ]),
    ]),
  ]);
}
