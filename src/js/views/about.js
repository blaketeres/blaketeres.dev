import m from "mithril";
import Base from "../components/base";

const sections = [
  ["people", "#people"],
  ["mission", "#mission"],
]

var people = [
  {
    name: "Blake Teres",
    description: [
      "Hi, ☝️ that's me. I'm the founder of <name>. I've been working as a full-time software engineer after \
      graduating from American University in 2017.",
      "I started my career at a small defense contractor improving \
      acoustic modeling algorithms to be used for submarine detection from surface-level ships. I then moved \
      to backend web development, where I helped manage a MASSIVE legacy homegrown back-office application for \
      an architecture software firm. Currently, I'm a senior backend developer at a startup in the agtech industry.",
      "Through all the changes, the things that have remained consistent are my love for challenges and my love for \
      learning. And blackberry margaritas. Enjoy the pictures of my dog, Luna."
    ],
    github: "https://github.com/blaketeres",
    linkedin: "https://www.linkedin.com/in/blake-teres/",
    stackoverflow: "https://stackoverflow.com/users/7559627/blake",
  },
];

var People = {
  view: function (vnode) {
    return m(
      "div.pt-4",
      people.map((person) => {
        return m("article", [
          m("h3", person["name"], [
            m("span.px-4", [
              m("a", { href: person["github"] }, [
                m("button.btn", [m("i.bi.bi-github")]),
              ]),
              m("a", { href: person["linkedin"]}, [
                m("button.btn", [m("i.bi.bi-linkedin")]),
              ]),
              m("a", { href: person["stackoverflow"]}, [
                m("button.btn", [m("i.bi.bi-stack-overflow")]),
              ]),
            ])
          ]),
          person["description"].map((paragraph) => {
            return m("p", paragraph);
          })
        ]);
      })
    );
  },
};

var Mission = {
  view: function (vnode) {
    return m("div.pt-4", [
      m("p.lead", "To solve technical problems for people who are bettering the world."),
    ])
  },
};

export function view() {
  return m("main", [
    m(Base),
    m(
      "div.container-sm",
      [
        m("h1", "About"),
        m("h2.display-3.py-4", "mission"),
        m(Mission),
        m("hr"),
        m("h2.display-3.py-4", "people"),
        m("p", "Note: <name> is currently a solo operation. As we grow, this section will be updated."),
        m(People)
      ]
    ),
  ]);
}