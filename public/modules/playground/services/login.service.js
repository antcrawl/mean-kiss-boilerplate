"use strict";
// Users service used for communicating with the users Login endpoint
angular.module("index").factory("Login", ["$resource",
	function($resource) {
		return $resource("login", {}, {
			update: {
				method: "PUT"
			}
		});
	}
]);