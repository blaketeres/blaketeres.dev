import '../scss/styles.scss'

var m = require("mithril")
var aboutme = require("./views/aboutme.js")
var home = require("./views/home.js")
var hireme = require("./views/hireme.js")
var projects = require("./views/projects.js")

m.route(document.body, "/home", {
    "/home": home,
    "/about-me": aboutme,
    "/projects": projects,
    "/hire-me": hireme,
})
