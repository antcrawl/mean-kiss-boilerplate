angular.module("login").controller('loginController', ["$scope", "$http",

    function($scope, $http) {

        $scope.validate = function() {
            $http.post(
                'validateLogin', {
                    username: $scope.username,
                    password: $scope.password
                }
            ).then(function(response) {
                alert(response.data);
            })

        }
    }
]);