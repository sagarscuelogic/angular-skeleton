/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('filters', [])
        .filter('ucfirst', function() {
            return function(input) {
                return input.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
            };
        });