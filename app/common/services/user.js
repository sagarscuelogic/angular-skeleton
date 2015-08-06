angular.module('user.service', ['ngResource'])
        .service('userService', ['$resource', userService]);



function userService($resource) {

    var service = {};
    service.get = get;
    service.getDetails = getDetails;
    return service;


    function get() {
        return ['Sagar', 'Nidhi', 'Pranay', 'Kalyani'];
    }

    function getDetails(userId) {
        console.log(userId);
//        return $resource('public/users/:userId.json', {}, {
        return $resource('public/users/sagar.json', {}, {
            query: {
                method: 'GET',
                params: {
                    userId: userId
                },
                isArray: true
            }
        });
    }
}
;

/*
 angular.module('user.service', ['ngResource'])
 .service('userService', ['$resource', function ($resource) {
 return {
 get: function () {
 return $resource('public/users.json', {}, {
 getData: {method: 'GET', isArray: false}
 });
 },
 getDetails: function (userId) {
 return $resource('public/users/:userId.json', {}, {
 query: {
 method: 'GET',
 params: {
 userId: 'users'
 },
 isArray: true
 }
 });
 }
 };
 
 }]);*/