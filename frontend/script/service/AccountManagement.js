const AccountManagement = function($http) {
    const url = 'http://localhost:1337/Account';
    this.getAccounts = () => {
        return $http.get(url).then(response =>{
            return response;
        });
    };
};
AccountManagement.$inject = ['$http'];
angular.module('App').service('AccountManagement',AccountManagement);