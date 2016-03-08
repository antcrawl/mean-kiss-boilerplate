'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose');
	
/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */
 
 /*
var express = require('express'),
    routes = require('./routes'),
    path = require('path');
 */
// Bootstrap db connection
var db = mongoose.connect(config.db);

/* var app = express();
app.directory = __dirname;

require('./config/environments')(app);
require('./routes')(app);

module.exports = app;
*/
// Init the express application
var app = require('./config/express')(db);
// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('Connect application started on port ' + config.port);