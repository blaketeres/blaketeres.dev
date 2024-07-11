import m from "mithril";
import Base from "../components/base";

const summary = [
  "Backend Web Development",
  "API Design / Implementation",
  "Cloud Service Management",
  "Geospatial Projects",
  "Code Optimization",
  "Simple Static Websites (like this one)",
];

export function view() {
  return m("main", [
    m(Base, [
      m(".text-center", [
        m("h1.display-3.pb-5", "hire me!"),
        m("p", "Here's a gist of what I can do for you."),
        m("p", "↓"),
        m(
          "ul.list-unstyled.fw-bold",
          summary.map((item) => {
            return m("li.pb-3", item);
          })
        ),
				m("p", "⟛"),
        m("div.d-inline-flex", [
          m("p.my-auto", "Need more info? Check out my resume"),
          m(
            "a",
            {
              href: "https://blaketeres-dev-public.s3.amazonaws.com/Resume+2024.pdf",
            },
            [m("button.btn", [m("i.bi.bi-file-earmark-pdf-fill")])]
          ),
        ]),
      ]),
    ]),
  ]);
}
