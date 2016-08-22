app.controller('AccountController', function($scope, AccountsManagement){
    AccountsManagement.getAccounts().then((accounts) => {
        $scope.accounts = accounts.data;
    });
    
});