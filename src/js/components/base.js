import m from "mithril";
import NavBar from "../components/navbar";

var Base = {
  view: function (vnode) {
    return m("nav", [m(NavBar)]);
  },
};

export default Base;
