'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    //multer = require('multer'),	// Import and View Data Model
    //fs = require('fs'),	// Import and View Data Model
    session = require('express-session'),
    compress = require('compression'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    helmet = require('helmet'),
    //passport = require('passport'),
    mongoStore = require('connect-mongo')({
        session: session
    }),
    flash = require('connect-flash'),
    config = require('./config'),
    consolidate = require('consolidate'),
    path = require('path'),
    expressHbs = require('express3-handlebars');

module.exports = function(db) {
    // Initialize express app
    var app = express();

    // Globbing model files
    //config.getGlobbedFiles('./app/models/**/*.js').forEach(function(modelPath) {
    //require(path.resolve(modelPath));
    //});

    // Setting application local variables
    app.locals.title = config.app.title;
    app.locals.description = config.app.description;
    app.locals.keywords = config.app.keywords;
    //app.locals.facebookAppId = config.facebook.clientID;

    for (var moduleName in config.modules) {
        app.locals["js" + moduleName] = config.getJavaScriptAssets(false, config.modules[moduleName]);
        app.locals["css" + moduleName] = config.getCSSAssets(config.modules[moduleName]);
    }
    app.locals.projectConfig = config.projectPaths;

    // Passing the request url to environment locals
    app.use(function(req, res, next) {
        res.locals.url = req.protocol + ':// ' + req.headers.host + req.url;
        next();
    });
    // var stream = fs.createWriteStream("my_file.txt"); stream.once('open', function(fd) { stream.write("My first row\n"); stream.write("My second row\n"); stream.end(); });
    // fs.appendFile('my_file.txt', 'data to append', function (err) { if (err) throw err; console.log('The "data to append" was appended to file!'); });
    // Should be placed before express.static
    app.use(compress({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    // Showing stack errors
    app.set('showStackError', true);

    // Set swig as the template engine
    app.engine('server.view.html', expressHbs({
        layoutsDir: "./app/views/layouts/",
        helpers: {
            section: function(name, options) {
                if (!this._sections) {
                    this._sections = {};
                }
                this._sections[name] = options.fn(this);
                return null;
            }
        },
        defaultLayout: 'layout.server.view.html'

    }));

    // Set views path and view engine
    app.set('view engine', 'server.view.html');
    app.set('views', './app/views');

    // Environment dependent middleware
    if (process.env.NODE_ENV === 'development') {
        // Enable logger (morgan)
        app.use(morgan('dev'));

        // Disable views cache
        app.set('view cache', false);
    } else if (process.env.NODE_ENV === 'production') {
        app.locals.cache = 'memory';
    }

    // Request body parsing middleware should be above methodOverride
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(bodyParser.text({
        type: 'text/*'
    }));

    // *************** Import and View Data Model:: START ***************
    //var strFileUploadPath = './uploads/';

    /*fs.exists(strFileUploadPath, function (exists) {
	  	console.log('express.js::#:: fs.exists():: exists: ', exists);
	});*/

    //fs.mkdir(strFileUploadPath, function (err) {	// 0777 || 0755, 0766
    //if (err)
    //{
    //throw err;
    //console.log('');
    //console.log('express.js::#:: fs.mkdir():: err: ', err);
    //console.log('express.js::#:: fs.mkdir():: Error, Folder ', './uploads/', ' already exists!');
    //}
    //else
    //{
    //console.log('express.js::#:: fs.mkdir():: Success, Folder ', './uploads/', ' does not exist. So, it has been created!');
    //}
    //});

    //app.use(multer({dest: strFileUploadPath,
    //onParseStart: function () {
    //console.log('express.js::#:: onParseStart(): ', new Date());
    //},
    //onParseEnd: function (req, next) {
    //console.log('express.js::#:: onParseEnd():: req.body: ', req.body);
    //console.log('express.js::#:: onParseEnd():: req.files: ', req.files);

    //console.log('express.js::#:: onParseEnd():: req.files.file[0].path: ', req.files.file[0].path);

    //fs.unlink(req.files.file[0].path, function (err) {
    //if (err)
    //{
    //throw err;
    //console.log('express.js::#:: fs.mkdir():: err: ', err);
    //}
    //else
    //{
    //console.log('express.js::#:: onParseEnd():: fs.unlink(): Success, File ', req.files.file[0].path, ' has been deleted/removed after Uploading and Parsing!');
    //}
    //});

    //next();
    //},
    //includeEmptyFields: true,
    //putSingleFilesInArray: true, // false, true
    //onFileUploadStart: function (file, req, res) {
    //console.log('express.js::#:: onFileUploadStart():: file: ', file);
    //},
    //onFileUploadComplete: function (file, req, res) {
    //console.log('express.js::#:: onFileUploadComplete():: file: ', file);
    //},
    /*onFileSizeLimit: function (file) {
			console.log('express.js::#:: onFileSizeLimit(): ', file)
		},*/
    /*onFilesLimit: function () {
			console.log('express.js::#:: onFilesLimit(): Crossed file limit!')
		},*/
    /*onFieldsLimit: function () {
			console.log('express.js::#:: onFieldsLimit(): Crossed fields limit!')
		},*/
    /*onPartsLimit: function () {
			console.log('express.js::#:: onPartsLimit(): Crossed parts limit!')
		},*/
    /*limits: {
		  	fieldNameSize: 100, // 100 bytes
			files: 2, // Infinity
			fields: 5, // Infinity
			fileSize: 700, // Infinity
			fieldSize: 1 // 1 MB
		},*/
    /*rename: function (fieldname, filename) {
		  //rename: function (fieldname, filename, req, res) {
		  	console.log('express.js::#:: rename(): ');
		    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
		},*/
    /*changeDest: function(dest, req, res) {
		   	console.log('express.js::#:: changeDest(): ');
		    return dest + '/user1'; 
		},*/
    //defCharset: 'utf8',
    //inMemory: true, // false
    //onError: function (error, next) {	
    //console.log('express.js::#:: onError():: error: ', error);

    //next(error);
    //},
    //onFileUploadData: function (file, data) {
    //onFileUploadData: function (file, data, req, res) {
    //file.data = data;
    //console.log('express.js::#:: onFileUploadData():: file: ', file);
    //console.log('express.js::#:: onFileUploadData():: file.data ', file.data);
    //}
    //}));
    // *************** Import and View Data Model:: END ***************

    app.use(methodOverride());

    // Enable jsonp
    app.enable('jsonp callback');

    // CookieParser should be above session
    app.use(cookieParser());

    // Express MongoDB session storage
    app.use(session({
        secret: config.sessionSecret,
        store: new mongoStore({
            db: db.connection.db,
            collection: config.sessionCollection
        })
    }));

    // use passport session
    //app.use(passport.initialize());
    //app.use(passport.session());

    // connect flash for flash messages
    app.use(flash());

    // Use helmet to secure Express headers
    app.use(helmet.xframe());
    app.use(helmet.iexss());
    app.use(helmet.contentTypeOptions());
    app.use(helmet.ienoopen());
    app.disable('x-powered-by');

    // Setting the app router and static folder
    app.use(express.static(path.resolve('./public')));

    // Globbing routing files
    config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
        require(path.resolve(routePath))(app);
    });

    // Assume 'not found' in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
    app.use(function(err, req, res, next) {
        // If the error object doesn't exists
        if (!err) return next();

        // Log it
        console.error(err.stack);

        // Error page
        res.status(500).render('500', {
            error: err.stack
        });
    });

    // Assume 404 since no middleware responded
    app.use(function(req, res) {
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not Found'
        });
    });

    return app;
};