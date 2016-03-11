"use strict";

module.exports = function(app) {
    // Root routing
    var core = require("../../app/controllers/core");
    var login = require("../../app/controllers/login");


    app.route("/").get(core.index);
    app.route("/login").get(login.index);
    app.post("/validateLogin",login.validateLogin);
    app.post("/register",login.register);

}