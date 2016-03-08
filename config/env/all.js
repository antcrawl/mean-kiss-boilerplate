'use strict';

module.exports = {
    app: {
        title: 'ComeAct',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
        keywords: 'mongodb, express, angularjs, node.js, mongoose, passport'
    },
    port: process.env.PORT || 3000,
    templateEngine: 'hbs',
    sessionSecret: 'MEAN',
    sessionCollection: 'sessions',
    projectPaths: {
        cruxDir: '/comeact-project/',
        clientTemplatesDir: '/comeact-project/app-templates/client/',
        serverTemplatesDir: '/comeact-project/app-templates/server/',
        angularDir: '/comeact-project/app-templates/client/angular/public/',
        htmlDir: '/comeact-project/app-templates/client/basic/public/',
        angularTemplates: '/comeact-project/app-templates/client/angular/templates/',
        angularBlankTemplate: '/comeact-project/app-templates/client/angular/templates/blank',
        htmlBlankTemplate: '/comeact-project/app-templates/client/basic/templates/blank',
        angularRoutingConfig: 'config/config.json',
        metaPages: '_metadata/pages.json',
        metaStyles: '_metadata/styles.json',
        userDir: '/home/ux/comeact/tmp/projects/'
    },
    modules: {
        assets: {
            lib: {
                css: [
                    'public/app/bower_components/bootstrap/dist/css/bootstrap.css',
                    'public/app/bower_components/bootstrap/dist/css/bootstrap-theme.css',
                    'public/app/bower_components/components-font-awesome/css/font-awesome.css'

                ],
                js: [
                    'public/app/bower_components/jquery/dist/jquery.min.js',
                    'public/app/bower_components/angular/angular.js',
                    'public/app/bower_components/angular-resource/angular-resource.js',
                    'public/app/bower_components/angular-animate/angular-animate.js',
                    'public/app/bower_components/angular-ui-router/release/angular-ui-router.js',
                    'public/app/bower_components/angular-ui-utils/ui-utils.js',
                    'public/app/bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'public/app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                ]
            },
            css: [
            ],
            js: [
                'public/config.js',
                'public/application.js'
            ],
            tests: [
            ]
        },
        indexAssets: {
            lib: {
                css: [

                ],
                js: [
                ]
            },
            css: [
                'public/modules/showcase/assets/css/*.css'
            ],
            js: [
                'public/modules/showcase/*.js',
                'public/modules/showcase/config/*.js',
                'public/modules/showcase/services/*.js',
                'public/modules/showcase/directives/*.js'
            ],
            tests: [

            ]
        },
        dashboardAssets: {
            lib: {
                css: [

                ],
                js: [

                ]
            },
            css: [
                "public/modules/dashboard/assets/css/*.css"

            ],
            js: [
                'public/config.js',
                'public/application.js',
                'public/modules/dashboard/dashboard.client.module.js',
                'public/modules/dashboard/routes/*.js'

            ],
            tests: []
        },
        playgroundAssets: {
            lib: {
                css: [],
                js: []
            },
            css: [],
            js: [],
            tests: []
        },
        loginAssets: {
            lib: {
                css: [
                ],
                js: [
                ]
            },
            css: [],
            js: [
                'public/config.js',
                'public/application.js',
                'public/modules/login/login.client.module.js',
                'public/modules/login/routes/*.js',
                'public/modules/login/controller/*.js'
            ],
            tests: []
        }
    }
};