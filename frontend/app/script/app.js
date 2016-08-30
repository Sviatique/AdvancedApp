'use strict';


const angular = require('angular');
require('angular-ui-bootstrap');
require('angular-material');
require('angular-ui-router');

import accountController from './controller/account.ctrl';
import accountService from './service/account.srv';
import dialogService from './service/dialog.srv';
import dialogController from './controller/dialog.ctrl';
import infoController from './controller/info.ctrl';
const backendUrl = 'http://localhost:1337/Account';

const app = angular.module('app', ['ui.bootstrap', 'ngMaterial', 'ui.router', 'templatesCache']);
app.constant('backendUrl', backendUrl);

const routing = ($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider
        .otherwise('/');
    $stateProvider
        .state('index', {
            url: '/',
            controller: 'accountController as vm',
            templateUrl: 'accountList.tmpl.html'
        })
        .state('extra', {
            url: '/accounts/:id',
            controller: 'infoController as vm',
            templateUrl: 'accountInfo.tmpl.html'
        });
};

routing.$inject = ['$urlRouterProvider', '$stateProvider'];
app.config(routing);

app.service('accountService', accountService);
app.service('dialogService', dialogService);
app.controller('accountController', accountController);
app.controller('dialogController', dialogController);
app.controller('infoController', infoController);