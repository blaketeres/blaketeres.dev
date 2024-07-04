import m from "mithril";
import Base from "../components/base";

var Misc = {
  view: function (vnode) {
    return m("ul", [
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

export function view() {
  return m("main", [
    m(Base),
    m("div.container-sm", [m("h1.display-3.pb-5", "misc"), m(Misc)]),
  ]);
}
