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
        $scope.register = function() {
            if (angular.equals($scope.register.password, $scope.register.confirmPassword)) {
                $http.post(
                    'register', {
                        username: $scope.register.username,
                        password: $scope.register.password

                    }
                ).then(function(response) {
                    alert(response.data);
                })

            }
        }
    }
]);