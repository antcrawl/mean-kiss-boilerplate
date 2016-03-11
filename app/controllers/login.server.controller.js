'use strict';

var loginDb = require('../models/loginSchema');
exports.validateLogin = function(req, res) {
    //TODO logic for login
    console.log(req.body);
    loginDb.findOne(req.body, function(err, user) {
        if (err) {
            res.send("failed");
        } else if (user) {
            console.log(user);
            res.redirect("/");
        } else {
            res.redirect("/register");
        }
    })

};
exports.index = function(req, res) {
    res.render("login", {
        indexPage: false
    });
};