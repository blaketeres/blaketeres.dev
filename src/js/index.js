import "../scss/styles.scss";
import "bootstrap";

var m = require("mithril");
var home = require("./views/home.js");
var about = require("./views/about.js");
var hireme = require("./views/hireme.js");

m.route(document.body, "/", {
  "/": home,
  "/about": about,
  "/hire-me": hireme,
});
