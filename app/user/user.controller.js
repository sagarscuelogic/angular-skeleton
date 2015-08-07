angular.module('user.controller',['services'])
      .controller('userCtrl',['$scope', '$log', '$routeParams', 'userService',UserController])

function UserController($scope, $log, $routeParams, userService) {
  $scope.users = userService.get(); 
  $scope.userDetails = userService.getDetails($routeParams.userId ? $routeParams.userId : null );
};