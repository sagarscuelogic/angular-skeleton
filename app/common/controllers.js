/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('commonControllers', [])
        .controller('NavbarController', ['$scope', '$location', function($scope, $location) {
                $scope.isActive = function(viewLocation) {
                    return viewLocation === $location.path();
                };
        }]);