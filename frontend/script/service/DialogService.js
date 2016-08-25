'use strict';

const DialogService = function($mdDialog) {
    this.getAccountDialog = (event,accData) => {
         
        return $mdDialog.show({
            controller: DialogController,
            targetEvent: event,
            templateUrl:'AccountCreation.tmpl.html',
            locals: {
                    accData: accData
                }
        });
        
    };
};

DialogService.$inject = ['$mdDialog'];

angular.module('App').service('DialogService',DialogService);