import m from "mithril";
import NavBar from "../components/navbar";

var Base = {
  view: function (vnode) {
    return m(".pb-4.sticky-top.body", [
        m(NavBar),
        vnode.children
    ]);
  },
};

export default Base;
