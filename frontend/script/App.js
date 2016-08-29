'use strict';
const backendUrl = 'http://localhost:1337/Account';
const app = angular.module('App', ['ui.bootstrap', 'ngMaterial', 'ui.router']);
app.constant('backendUrl', backendUrl);

const routing = ($urlRouterProvider,$stateProvider) => {
    $urlRouterProvider
        .otherwise('/');
    $stateProvider
        .state('index', {
            url: '/',
            controller: 'accountController',
            templateUrl: 'template/accountList.tmpl.html'
        })
        .state('extra', {
            url: '/accounts/:id',
            controller: 'infoController',
            templateUrl: 'template/accountInfo.tmpl.html'
    });
};

routing.$inject = ['$urlRouterProvider' ,'$stateProvider'];
app.config(routing);
