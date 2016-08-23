'use strict';
const backendUrl = 'http://localhost:1337/Account';
const app = angular.module('App', ['ui.bootstrap', 'ngMaterial']);
app.constant('backendUrl', backendUrl);

