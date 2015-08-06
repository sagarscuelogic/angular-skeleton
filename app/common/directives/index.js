var directives = angular.module('directives', []);

directives
        .directive('navBar', function () {
            return {
                templateUrl: 'app/common/views/navbar.html'
            };
        });