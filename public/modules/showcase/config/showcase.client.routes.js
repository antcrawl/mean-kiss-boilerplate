"use strict";

// Setting up route
angular.module("index").config(["$stateProvider", "$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise("/");

		// Home state routing
		$stateProvider.
		state("index", {
			url: "/",
			templateUrl: "modules/showcase/views/showcase.client.view.html"
		});
	}
]);