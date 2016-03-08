angular.module("index").directive("cruxCustomLoad", function($compile) {
    return {
        restrict: "A",
        link: function(scope,element,attrs){

			element.ready(function () {
				var methodName = attrs.customMethod
				window[methodName]();
			});

        }
    };
});

