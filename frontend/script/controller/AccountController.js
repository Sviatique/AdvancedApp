'use strict';

const AccountController = ($scope, $mdDialog, AccountService) => {

    $scope.showPrompt = function(event) {
        $mdDialog.show({
            controller: DialogController,
            targetEvent: event,
            templateUrl:'AccountCreation.tmpl.html',
            locals: {messages: $scope.messages}

        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });

    };

    AccountService.getAccounts().then(accounts => {
        $scope.messages = [];
        $scope.accounts = accounts.data;
    });
};

AccountController.$inject = ["$scope","$mdDialog", "AccountService"];

angular.module('App').controller('AccountController', AccountController);

