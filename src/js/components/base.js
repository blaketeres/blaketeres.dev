import m from "mithril";
import NavBar from "../components/navbar";
import ContactBar from "./contactBar";


var Base = {
  view: function (vnode) {
    return m(".sticky-top.body", [
      m(NavBar),
      m(".container-sm.pt-5.main-content", [
        vnode.children,
        m(".fixed-bottom.footer", m(ContactBar)),
      ]),
    ]);
  },
};

export default Base;
