'use strict';
const AccountService = function($http, backendUrl) {

    this.getAccountById = (id) => {
        return $http.get(backendUrl+'/'+id)
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
    
    this.updateAccount = (data, id) => {
        if(id){
            return $http.put(backendUrl+'/'+id, data);
        } else {
            return $http.post(backendUrl, data);
        }
    };
    
    this.deleteAccount = (id) => {
        $http.delete(backendUrl+'/'+id);
    };
    
};

AccountService.$inject = ['$http', 'backendUrl'];

angular.module('App').service('AccountService',AccountService);