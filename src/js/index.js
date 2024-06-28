import '../scss/styles.scss'

var m = require("mithril")
var about = require("./views/about.js")
var home = require("./views/home.js")
// var contact = require("./views/contact.js")
var projects = require("./views/projects.js")
// var services = require("./views/services.js")

m.route(document.body, "/home", {
    "/home": home,
    "/about": about,
    // "/services": services,
    "/projects": projects,
    // "/contact": contact,
})
