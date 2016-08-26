'use strict';
const AccountController = function($scope, $mdDialog, $stateParams, AccountService, DialogService) {
    AccountService.getAccounts()
    .then(response => {
        $scope.accounts = response.data; 
        
    });

    $scope.newAccount = function(event) {
        DialogService.getAccountDialog(event, {}, 'Create')
        .then(function(data) {
            AccountService.createAccount(data);
        }, function() {
            console.log('You cancelled the dialog.');
        });
    
    };    
};

AccountController.$inject = ['$scope','$mdDialog','$stateParams','AccountService', 'DialogService'];

angular.module('App').controller('AccountController', AccountController);

