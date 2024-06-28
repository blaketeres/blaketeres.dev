import '../scss/styles.scss'

var m = require("mithril")
var home = require("./views/home.js")
var projects = require("./views/projects.js")

m.route(document.body, "/home", {
    "/home": home,
    "/projects": projects,
})
