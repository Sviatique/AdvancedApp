'use strict';
const AccountService = function($http, backendUrl) {

    this.getAccountById = (id) => {
        return $http.get(backendUrl+'/'+(++id))
            .then(response => {
                 return response;
            }); 
    };
    this.getAccounts = () => {
             return $http.get(backendUrl)
            .then(response => {
                 return response;
            });
    };
};

AccountService.$inject = ['$http', 'backendUrl'];

angular.module('App').service('AccountService',AccountService);