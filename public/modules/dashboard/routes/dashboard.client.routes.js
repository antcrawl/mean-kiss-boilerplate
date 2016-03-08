"use strict";

// Setting up route
angular.module("dashboard").config(["$stateProvider", "$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise("/");

		// Home state routing
		$stateProvider.
		state("dashboard", {
			url: "/",
			templateUrl: "modules/dashboard/views/dashboard.client.view.html"
		});
	}
]);