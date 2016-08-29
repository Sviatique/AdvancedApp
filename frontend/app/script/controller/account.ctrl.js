'use strict';


const accountController = function($scope, $mdDialog, $stateParams, accountService, dialogService){

    accountService.getAccounts()
    .then(response => {
        $scope.accounts = response.data; 
        
    });

    $scope.newAccount = function(event) {
        dialogService.getAccountDialog(event, {}, 'Create')
        .then(function(data) {
            accountService.updateAccount(data)
            .then(response => {
                accountService.getAccounts()
                .then(response => {
                    $scope.accounts = response.data; 
                });
            });
        }, function() {
           console.log('You cancelled the dialog.');
        });
        
    };    
};

accountController.$inject = ['$scope','$mdDialog','$stateParams','accountService', 'dialogService'];

export default accountController;
