
const app = angular.module('App', []);

app.service('AccountsManagement', function($http){
    const url = 'http://localhost:1337/Account';
    this.getAccounts = () => {
        return $http.get(url).then(response =>{
            return response;
        });
    };
});