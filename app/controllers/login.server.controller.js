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
            res.redirect("/dashboard");
        } else {
            res.redirect("/login");
        }
    })

};
exports.register = function(req, res) {
    loginDb.findOne(req.body, function(err, user) {
        if (err) {
            res.send("failed");
        } else if (user) {
            res.send("user already exists");
        } else {
            var loginData = new loginDb(req.body);
            loginData.save(function(err, data) {
                if (err) {
                    console.log("Failed")
                } else {
                    res.send("saved successfuly");
                }

            });
        }
    })
};

exports.index = function(req, res) {
    res.render("login", {
        indexPage: false
    });
};