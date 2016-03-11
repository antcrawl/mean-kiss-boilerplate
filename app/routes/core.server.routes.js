"use strict";

module.exports = function(app) {
    // Root routing
    var core = require("../../app/controllers/core");
    var login = require("../../app/controllers/login");
    var register = require("../../app/controllers/register");


    app.route("/").get(core.index);
    app.route("/login").get(login.index);
    app.route("/register").get(register.index);
    app.post("/validateLogin",login.validateLogin);
    app.post("/registerUser",register.registerUser);

}