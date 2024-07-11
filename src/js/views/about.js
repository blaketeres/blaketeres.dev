import m from "mithril";
import Base from "../components/base";
import AppStoreIcon from "../../../static/AppStoreBlack.svg";

var Misc = {
  view: function (vnode) {
    return m("ul.list-unstyled", [
      m("li", [
        m("div.d-inline-flex", [
          m("p.my-auto", "Resume"),
          m(
            "a",
            {
              href: "https://blaketeres-dev-public.s3.amazonaws.com/Resume+2024.pdf",
            },
            [m("button.btn", [m("i.bi.bi-file-earmark-pdf-fill")])]
          ),
        ]),
        m("li", [
          m("div.d-inline-flex", [
            m("p.my-auto", "Euronoise 2018"),
            m(
              "a",
              {
                href: "https://blaketeres-dev-public.s3.amazonaws.com/350_Euronoise2018.pdf",
              },
              [m("button.btn", [m("i.bi.bi-file-earmark-pdf-fill")])]
            ),
          ]),
        ]),
      ]),
    ]);
  },
};

const projects = [
  {
    name: "blaketeres.dev",
    github: "https://github.com/blaketeres/blaketeres.dev",
    description:
      "This is the website you are looking at right now. Check out the README for how I built it.",
  },
  {
    name: "the r&i guys",
    github: null,
    appStore: "https://apps.apple.com/ca/app/the-r-i-guys/id6474215530",
    description:
      "This is a mobile app for user-sourced auto removal & installation (R&I) information. \
      I built the backend using Django and Django Rest Framework. The frontend was built \
      by a good friend of mine. This app is still in development and we have big plans to polish it up \
      and add new features in the coming future. Unfortunately this code is not open-source, but the app is free!",
  },
];

var Projects = {
  view: function (vnode) {
    return m(
      "div",
      projects.map((project) => {
        const githubLink = [
          m("span.px-4", [
            m("a", { href: project["github"] }, [
              m("button.btn", [m("i.bi.bi-github")]),
            ]),
          ]),
        ];
        const appStoreLink = [
          m("span.px-4", [
            m("a", { href: project["appStore"] }, [
              m("button.btn", [
                m("img", { src: AppStoreIcon, alt: "App Store" }),
              ]),
            ]),
          ]),
        ];

        return [
          m("div.pb-4", [
            m(
              "h2",
              project["name"],
              project["github"] ? githubLink : [],
              project["appStore"] ? appStoreLink : []
            ),
            m("p", project["description"]),
          ]),
        ];
      })
    );
  },
};

export function view() {
  return m("main", [
    m(Base, [
      // fill this in with stuff about me!
      // ALSO move the publication link somewhere that makes sense (maybe just linkedin :/)
      m("h1.display-3.pb-3.text-center", "projects"),
      m(".div", m(Projects)),
    ]),
  ]);
}
