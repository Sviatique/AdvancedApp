
const app = angular.module('App', []);

app.service('AccountsManagement', function($http){
    this.getAccounts = () => {
        return $http.jsonp('http://localhost:1337/Account?callback=JSON_CALLBACK').success((response) => {
            return response;
        });
    };
});