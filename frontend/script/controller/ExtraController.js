'use strict';

const ExtraController = function($scope, $mdDialog, $stateParams, AccountService, DialogService) {
    
    AccountService.getAccountById($stateParams.id)
    .then(response => {
        $scope.person = response.data;
    });
    
    $scope.modifyAccount = function(event){

        DialogService.getAccountDialog(event, $scope.person, 'Modify')
        .then(function(data) {
            AccountService.updateAccount(data, $stateParams.id);
        }, function() {
            console.log('You cancelled the dialog.');
        });
    };

    $scope.deleteAccount = function(event){
        const confirm = $mdDialog.confirm()
          .title('Deleting account')
          .textContent('Do you really want to delete this account?')
          .ariaLabel('Deleting')
          .targetEvent(event)
          .ok('Do it!')
          .cancel('Nope');

        $mdDialog.show(confirm).then(function() {
            AccountService.deleteAccount($stateParams.id);
            window.location.href = 
                window.location.href.replace('accounts/' + $stateParams.id, "");
        }, function() {
            
        });
    };

};

ExtraController.$inject = ["$scope","$mdDialog", "$stateParams", "AccountService", "DialogService"];

angular.module('App').controller('ExtraController', ExtraController);

