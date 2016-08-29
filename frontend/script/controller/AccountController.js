'use strict';
const AccountController = function($scope, $mdDialog, $stateParams, AccountService, DialogService) {
    $scope.AccountService = AccountService;
    AccountService.getAccounts()
    .then(response => {
        $scope.accounts = response.data; 
        
    });

    $scope.newAccount = function(event) {
        DialogService.getAccountDialog(event, {}, 'Create')
        .then(function(data) {
            
            AccountService.updateAccount(data)
            .then(response => {
                AccountService.getAccounts()
                .then(response => {
                    $scope.accounts = response.data; 
                });
            });
            
        }, function() {
           console.log('You cancelled the dialog.');
        });
        
    };    
};

AccountController.$inject = ['$scope','$mdDialog','$stateParams','AccountService', 'DialogService'];

angular.module('App').controller('AccountController', AccountController);

