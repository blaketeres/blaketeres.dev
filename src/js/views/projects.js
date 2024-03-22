import m from "mithril";
import Base from "../components/base";

const projects = [
  {
    name: "This website",
    link: "https://github.com/blaketeres/blaketeres.dev",
    description: "My first frontend project. I almost never do these sorts of things.",
  },
];

var Projects = {
  view: function (vnode) {
    return m(
      "div.pt-4",
      projects.map((project) => {
        return [
          m("a", { href: project["link"]}, [
            m("h2", project["name"])
          ]),
          m("p", project["description"]),
          m("hr"),
        ];
      })
    );
  },
};

export function view() {
  return m("main", [
    m(Base),
    m("div.container-sm", [
      m("h1", "Projects"),
      m(Projects)
    ])
  ]);
}