'use strict';


const accountService = function ($http, backendUrl) {

    this.getAccountById = (id) => {
        return $http.get(backendUrl + '/' + id);
    };

    this.getAccounts = () => {
        return $http.get(backendUrl);
    };

    this.updateAccount = (data, id) => {
        if (id) {
            return $http.put(backendUrl + '/' + id, data);
        } else {
            return $http.post(backendUrl, data);
        }
    };

    this.deleteAccount = (id) => {
        return $http.delete(backendUrl + '/' + id);
    };

};

accountService.$inject = ['$http', 'backendUrl'];

export default accountService;