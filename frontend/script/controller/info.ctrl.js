'use strict';

const infoController = function($scope, $mdDialog,$state, $stateParams, accountService, dialogService) {
    
    accountService.getAccountById($stateParams.id)
    .then(response => {
        $scope.person = response.data;
        console.log($scope.person)
        let createdAt = [];
        let updatedAt = [];
        let date = [];
        let actions = [];
        $scope.person.activities.map(value => {
            actions.push(value.amountOfActions);
            date.push(value.date.split(':')[0].split('T')[0])
        });
        console.log(updatedAt)
    $('#activityChart').highcharts({
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

//        $('#activityChart').highcharts({
//        chart: {
//            type: 'bar'
//        },
//        title: {
//            text: 'Activities'
//        },
//        xAxis: {
//            categories: ['Created at', 'Updated at']
//        },
//        yAxis: {
//            title: {
//                text: 'Activities'
//            }
//        },
//        series: [{
//            name: 'Created at',
//            data: [1, 0, 4]
//        }, {
//            name: 'Updated at',
//            data: [5, 7, 3]
//        }]
//    });
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

