'use strict';

const infoController = function($scope, $mdDialog,$state, $stateParams, accountService, dialogService) {
    
    accountService.getAccountById($stateParams.id)
    .then(response => {
        $scope.person = response.data;
    });
    
    $scope.modifyAccount = function(event){
        dialogService.getAccountDialog(event, $scope.person, 'Modify')
        .then(function(data) {
            accountService.updateAccount(data, $stateParams.id)
            .then(response => {
                $scope.person = response.data;
            });
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

        $mdDialog.show(confirm)
            .then(function() {
            accountService.deleteAccount($stateParams.id)
            .then(response => {
               $state.go('index'); 
            });
            
        }, function() {      
        });
    };
};

infoController.$inject = ['$scope','$mdDialog','$state', '$stateParams', 'accountService', 'dialogService'];

angular.module('App').controller('infoController', infoController);

