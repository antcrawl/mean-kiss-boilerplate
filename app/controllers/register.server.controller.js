'use strict';

var loginDb = require('../models/loginSchema');
exports.registerUser = function(req, res) {
    loginDb.findOne(req.body, function(err, user) {
        if (err) {
            res.send("failed");
        } else if (user) {
            res.send("User already exists");
        } else {
            var loginData = new loginDb(req.body);
            loginData.save(function(err, data) {
                if (err) {
                    console.log("Failed")
                } else {
                    res.status(200);
                    res.send(JSON.stringify({"route" : "login"}));
                }

            });
        }
    })
};

exports.index = function(req, res) {
    res.render("register", {
        indexPage: false
    });
};