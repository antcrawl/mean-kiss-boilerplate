"use strict";

// Setting up route
angular.module("register").config(["$stateProvider", "$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise("/");

		// Home state routing
		$stateProvider.
        state("register", {
			url: "/",
			templateUrl: "modules/register/views/register.client.view.html",
			controller:"registerController"
		});
	}
]);