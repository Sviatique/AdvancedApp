'use strict';

const AccountService = function($http, backendUrl) {
    
    this.getAccounts = () => {
        return $http.get(backendUrl).then(response =>{
            return response;
        });
    };
};

AccountService.$inject = ['$http', 'backendUrl'];

angular.module('App').service('AccountService',AccountService);