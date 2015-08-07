'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
    'ngRoute',
    'directives',
    'filters',
    'commonControllers',
    'user'
]).
        config(['$routeProvider', function ($routeProvider) {
                $routeProvider.otherwise({redirectTo: ''});
            }]);
