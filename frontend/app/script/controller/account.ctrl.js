'use strict';


const accountController = function ($mdDialog, $stateParams, accountService, dialogService) {

    accountService.getAccounts()
        .then(response => {
            this.accounts = response.data;

        });

    this.newAccount = event => {
        dialogService.getAccountDialog(event, {}, 'Create')
            .then(data => {
                return accountService.updateAccount(data);
            })
            .then(response => {
                return accountService.getAccounts();
            })
            .then(response => {
                this.accounts = response.data;
             })
            .catch(() => {
                console.log('You cancelled the dialog.');
            });
    };
};

accountController.$inject = ['$mdDialog', '$stateParams', 'accountService', 'dialogService'];

export default accountController;
