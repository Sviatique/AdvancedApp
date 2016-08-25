'use strict';

const AccountController = ($scope, $mdDialog, AccountService, DialogService) => {
    $scope.newAccount = function(event) {
        DialogService.getAccountDialog(event, {})
        .then(function(data) {
            console.log(data);
        }, function() {
            console.log('You cancelled the dialog.');
        });;
        

    };
    
    $scope.modifyAccount = function(event, id){
       
        DialogService.getAccountDialog(event, $scope.accounts[id])
        .then(function(data) {
            console.log(data);
        }, function() {
            console.log('You cancelled the dialog.');
        });;
    };

    $scope.deleteAccount = function(event, id){
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

    AccountService.getAccounts().then(accounts => {
        $scope.accounts = [];
        Object.keys(accounts.data).map((key) => {
            $scope.accounts.push(accounts.data[key])
		})
        console.log($scope.accounts)
    });
};

AccountController.$inject = ["$scope","$mdDialog", "AccountService", "DialogService"];

angular.module('App').controller('AccountController', AccountController);

