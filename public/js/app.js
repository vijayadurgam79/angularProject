'use strict';

var app = angular.module('angularTesting', [ 'ui.router']);
app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/templates/login.html'
                // controller: 'arenaCtrl'
            });

    }])
