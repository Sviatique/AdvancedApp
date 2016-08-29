'use strict';


const accountController = function($scope, $mdDialog, $stateParams, accountService, dialogService){

    accountService.getAccounts()
    .then(response => {
        $scope.accounts = response.data; 
        
    });

    $scope.newAccount = event => {
        dialogService.getAccountDialog(event, {}, 'Create')
        .then(data => {
            accountService.updateAccount(data)
            .then(response => {
                accountService.getAccounts()
                .then(response => {
                    $scope.accounts = response.data; 
                });
            });
        }, () => {
           console.log('You cancelled the dialog.');
        });
        
    };    
};

accountController.$inject = ['$scope','$mdDialog','$stateParams','accountService', 'dialogService'];

export default accountController;
