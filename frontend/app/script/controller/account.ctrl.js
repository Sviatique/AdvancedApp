'use strict';


const accountController = function ($mdDialog, $stateParams, accountService, dialogService) {
    const vm = this;
    
    accountService.getAccounts()
        .then(response => {
            vm.accounts = response.data;

        });

    this.newAccount = event => {
        dialogService.getAccountDialog(event, {}, 'Create')
            .then(data => {
                return accountService.updateAccount(data);
            })
            .then(() => {
                return accountService.getAccounts();
            })
            .then(response => {
                vm.accounts = response.data;
             })
            .catch(() => {
                console.log('You cancelled the dialog.');
            });
    };
};

accountController.$inject = ['$mdDialog', '$stateParams', 'accountService', 'dialogService'];

export default accountController;
