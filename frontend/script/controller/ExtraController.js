'use strict';

const ExtraController = function($scope, $mdDialog, $stateParams, AccountService, DialogService) {
    
    AccountService.getAccountById($stateParams.id)
    .then(response => {
        $scope.person = response.data;
    });
    
    $scope.modifyAccount = function(event, id){

        DialogService.getAccountDialog(event, $scope.person)
        .then(function(data) {
            console.log(data);
        }, function() {
            console.log('You cancelled the dialog.');
        });
        console.log(event)
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
    };

};

ExtraController.$inject = ["$scope","$mdDialog", "$stateParams", "AccountService", "DialogService"];

angular.module('App').controller('ExtraController', ExtraController);

