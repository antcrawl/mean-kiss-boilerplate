"use strict";

// Setting up route
angular.module("login").config(["$stateProvider", "$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise("/");

		// Home state routing
		$stateProvider.
		state("login", {
			url: "/",
			templateUrl: "modules/login/views/login.client.view.html",
			controller:"loginController"
		});
	}
]);