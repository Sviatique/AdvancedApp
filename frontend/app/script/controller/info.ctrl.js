'use strict';
import Highcharts from 'highcharts'
const infoController = function($scope, $mdDialog,$state, $stateParams, accountService, dialogService) {
    
    accountService.getAccountById($stateParams.id)
    .then(response => {
        $scope.person = response.data;
        console.log($scope.person)
        let date = [];
        let actions = [];
        
        $scope.person.activities.map(value => {
            actions.push(value.amountOfActions);
            date.push(value.date.split(':')[0].split('T')[0])
        });
        
        Highcharts.chart('activityChart', {
            title: {
            text: 'Activities',
            x: -20 
        },
        xAxis: {
            categories: date
        },
        yAxis: {
            title: {
                text: 'Date'
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
            name: 'Number of actions',
            data: actions
        }]
        });

    });
    
           
    $scope.modifyAccount = event => {
        dialogService.getAccountDialog(event, $scope.person, 'Modify')
        .then(data => {
            accountService.updateAccount(data, $stateParams.id)
            .then(response => {
                $scope.person = response.data;
            });
        }, () => {
            console.log('You cancelled the dialog.');
        });
    };

    $scope.deleteAccount = (event) => {
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
            
        }, () => {      
        });
    };
};

infoController.$inject = ['$scope','$mdDialog','$state', '$stateParams', 'accountService', 'dialogService'];

export default infoController;

