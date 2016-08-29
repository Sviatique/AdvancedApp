'use strict';
const dialogService = function($mdDialog) {
    this.getAccountDialog = (event,accData, mode) => {
        return $mdDialog.show({
            controller: dialogController,
            targetEvent: event,
            templateUrl:'template/accountEdit.tmpl.html',
            locals: {
                    accData: accData,
                    mode: mode,
                    event: event
                }
        });
        
    };
};

dialogService.$inject = ['$mdDialog'];

angular.module('App').service('dialogService',dialogService);