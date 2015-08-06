angular.module('user.route', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        .when('/users', {
                            templateUrl: 'app/user/views/list.html',
                            controller: 'userCtrl'
                        })
                        .when('/users/:userId', {
                            templateUrl: 'app/user/views/details.html',
                            controller: 'userCtrl'
                        });

            }]);