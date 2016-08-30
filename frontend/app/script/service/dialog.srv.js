'use strict';
import dialogController from '../controller/dialog.ctrl';

const dialogService = function ($mdDialog) {
    this.getAccountDialog = (event, accData, mode) => {
        return $mdDialog.show({
            controller: 'dialogController as vm',
            targetEvent: event,
            templateUrl: 'app/template/accountEdit.tmpl.html',
            locals: {
                accData: accData,
                mode: mode,
                event: event
            }
        });

    };
};

dialogService.$inject = ['$mdDialog'];

export default dialogService;