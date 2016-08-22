'use strict';

const AccountController = ($scope, AccountManagement) => {
     AccountManagement.getAccounts().then((accounts) => {
        $scope.messages = [];
        $scope.accounts = accounts.data;
    });
};
AccountController.$inject = ["$scope", "AccountManagement"];

angular.module('App').controller('AccountController', AccountController);

