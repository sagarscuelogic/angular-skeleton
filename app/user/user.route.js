angular.module('user.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'user/views/user.html',
    controller: 'userCtrl'
  });
}]);