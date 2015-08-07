angular.module('user.service', [])
        .service('userService', function () {
            var users = {
                sagar: {
                    "first-name": "Sagar",
                    "last-name": "Sutaria"
                },
                nidhi: {
                    "first-name": "Nidhi",
                    "last-name": "Arya"
                },
                pranay: {
                    "first-name": "Pranay",
                    "last-name": "Dubey"
                },
                kalyani: {
                    "first-name": "Sagar",
                    "last-name": "Kalyani"
                }
            };
            return {
                get: function () {
                    return ['Sagar', 'Nidhi', 'Pranay', 'Kalyani'];
                },
                getDetails: function (userId) {
                    return users[userId];
                }
            };
        });