'use strict';
import Highcharts from 'highcharts';

const infoController = function ($mdDialog, $state, $stateParams, accountService, dialogService) {

    accountService.getAccountById($stateParams.id)
        .then(response => {
            this.person = response.data;
            let date = [];
            let actions = [];
            let dateInstance;

            this.person.activities.map(value => {
                dateInstance = new Date(value.date);
                actions.push(value.amountOfActions);

                date.push(dateInstance.getDate() + '/' + dateInstance.getMonth());
            });

            Highcharts.chart('activityChart', {
                title: {
                    text: 'Activities',
                    x: -20
                },
                xAxis: {
                    title: {
                        text: 'Date'
                    },
                    categories: date
                },
                yAxis: {
                    title: {
                        text: 'Number of actions'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'User activity',
                    data: actions
                }]
            });

        });


    this.modifyAccount = event => {
        dialogService.getAccountDialog(event, this.person, 'Edit')
            .then(response => {
                accountService.updateAccount(response, $stateParams.id);
                return response;
            })
            .then(response => {
                this.person = response;
            })
            .catch(() => {
                console.log('You cancelled the dialog.');
            });
    };

    this.deleteAccount = (event) => {
        const confirm = $mdDialog.confirm()
            .title('Deleting account')
            .textContent('Do you really want to delete this account?')
            .ariaLabel('Deleting')
            .targetEvent(event)
            .ok('Do it!')
            .cancel('Nope');

        $mdDialog.show(confirm)
            .then(() => {
                return accountService.deleteAccount($stateParams.id);
            })
            .then(() => {
                $state.go('index');
            })
            .catch(() => {
                console.log('Error when deleting account');
            });

    };
};


infoController.$inject = ['$mdDialog', '$state', '$stateParams', 'accountService', 'dialogService'];

export default infoController;

