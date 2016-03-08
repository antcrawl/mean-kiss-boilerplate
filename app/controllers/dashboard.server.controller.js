'use strict';

exports.index = function(req, res) {
    console.log('dashboard called');
    res.render('dashboard', {
       indexPage:false,
    });
};