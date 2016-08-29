'use strict';
const backendUrl = 'http://localhost:1337/Account';
const app = angular.module('App', ['ui.bootstrap', 'ngMaterial', 'ui.router']);
app.constant('backendUrl', backendUrl);

const routing = ($stateProvider) => {
    $stateProvider
        .state('index', {
            url: '/',
            controller: 'AccountController',
            templateUrl: './temp.html'
        })
        .state('extra', {
            url: '/accounts/:id',
            controller: 'ExtraController',
            templateUrl: 'template/extra.html'
    });
};

routing.$inject = ['$stateProvider'];
app.config(routing);
