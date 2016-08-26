'use strict';
const AccountController = function($scope, $mdDialog, AccountService, DialogService) {
    
    $scope.newAccount = function(event) {
        DialogService.getAccountDialog(event, {})
        .then(function(data) {
            console.log(data);
        }, function() {
            console.log('You cancelled the dialog.');
        });
        

    };

    $scope.modifyAccount = function(event, id){
        event.preventDefault();
        event.stopPropagation();
        DialogService.getAccountDialog(event, $scope.accounts[id])
        .then(function(data) {
            console.log(data);
        }, function() {
            console.log('You cancelled the dialog.');
        });
        console.log(event)
    };

    $scope.deleteAccount = function(event, id){
        event.preventDefault();
        event.stopPropagation();
        const confirm = $mdDialog.confirm()
          .title('Deleting account')
          .textContent('Do you really want to delete this account?')
          .ariaLabel('Deleting')
          .targetEvent(event)
          .ok('Do it!')
          .cancel('Nope');

        $mdDialog.show(confirm).then(function() {
            $scope.accounts.splice(id,1);
        }, function() {
            
        });
        //event.stopPropagation();
    };

    AccountService.getAccounts()
    .then(response => {
        $scope.accounts = response.data; 
    });;
};

AccountController.$inject = ["$scope","$mdDialog", "AccountService", "DialogService"];

angular.module('App').controller('AccountController', AccountController);

