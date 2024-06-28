import '../scss/styles.scss'
import 'bootstrap'

var m = require("mithril")
var home = require("./views/home.js")
var projects = require("./views/projects.js")
var misc = require("./views/misc.js")

m.route(document.body, "/", {
    "/": home,
    "/projects": projects,
    "/misc": misc,
})
