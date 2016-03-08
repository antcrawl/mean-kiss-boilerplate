app.controller('carouselController', ['$scope', '$resource', "$http", "$sce", "$rootScope", "$timeout",
    function($scope, $resource, $http, $sce, $rootScope, $timeout) {
        function populateCarouselHTML(argument) {

            $http({
                url: "api/carousel",
                method: "GET"

            }).then(function(response) {
                $scope.carouselContent = $sce.trustAsHtml(response.data);
                $timeout(function(argument) {
                    $rootScope.$broadcast("initCarousel");
                })

            })
        }

        function populateCarouselJSON(argument) {

            $http({
                url: "api/carouselJSON",
                method: "GET"

            }).then(function(response) {
                $scope.carouselData = response.data;

            })
        }
        //populateCarouselHTML();
        populateCarouselJSON();

    }
]);