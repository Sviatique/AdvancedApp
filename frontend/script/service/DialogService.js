'use strict';
const DialogService = function($mdDialog) {
    this.getAccountDialog = (event,accData, mode) => {
        return $mdDialog.show({
            controller: DialogController,
            targetEvent: event,
            templateUrl:'template/AccountCreation.tmpl.html',
            locals: {
                    accData: accData,
                    mode: mode,
                    event: event
                }
        });
        
    };
};

DialogService.$inject = ['$mdDialog'];

angular.module('App').service('DialogService',DialogService);