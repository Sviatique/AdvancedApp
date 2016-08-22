
const app = angular.module('App', []);

app.service('AccountsManagement', function($http){
    const url = 'http://localhost:1337/Account?callback=JSON_CALLBACK';
    this.getAccounts = () => {
        return $http.get('http://localhost:1337/Account').then(response =>{
            return response;
        });
    };
});