angular.module("register").controller('registerController', ["$scope", "$http",

    function($scope, $http) {
        $scope.register = function() {
            if (angular.equals($scope.register.password, $scope.register.confirmPassword)) {
                $http.post(
                    'registerUser', {
                        username: $scope.register.username,
                        password: $scope.register.password

                    }
                ).then(function(response) {
                    if(response.data["route"] != undefined){
                        window.location = response.data["route"];
                   }
                    else{
                         alert(response.data);
                    }
                   
                })

            }
        }
    }
]);