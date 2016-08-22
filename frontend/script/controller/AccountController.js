app.controller('AccountController', function($scope, AccountsManagement ){
   
    AccountsManagement.getAccounts().then((accounts) => {
        $scope.messages = [];
        $scope.accounts = accounts.data;
    });
    
});