
const app = angular.module('App', []);

app.service('AccountsManagement', function($http){
    const url = 'http://localhost:1337/Account';
    this.getAccounts = () => {
        return $http.get(url).then(response =>{
            return response;
        });
    };
});

app.directive('nameDirective', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, AccountController) {
      function nameValidation(value) {
        const message = "Name must be from 3 to 18 characters";
        if (value && value.length > 2 && value.length <19) {
          AccountController.$setValidity('Name', true);
          const index = scope.messages.indexOf(message);
          if (index > -1) {
            scope.messages.splice(index, 1);
          }
        } else {
          AccountController.$setValidity('Name', false);
          if(scope.messages.indexOf(message) < 0)
          scope.messages.push(message);
        }
        return value;
      }
      AccountController.$parsers.push(nameValidation);
    }
  };
});

app.directive('ageDirective', function(){
    return {
    require: 'ngModel',
    link: function(scope, element, attr, AccountController) {
      function ageValidation(value) {
        const message = "Age must be from 18 to 100";
        if (value && value > 17 && value < 100) {
          AccountController.$setValidity('Age', true);
          const index = scope.messages.indexOf(message);
          if (index > -1) {
            scope.messages.splice(index, 1);
          }
        } else {
          AccountController.$setValidity('Age', false);
          if(scope.messages.indexOf(message) < 0)
          scope.messages.push(message);
        }
        return value;
      }
      AccountController.$parsers.push(ageValidation);
    }
  };
});



app.directive('phoneDirective', function(){
    return {
    require: 'ngModel',
    link: function(scope, element, attr, AccountController) {
      function phoneValidation(value) {
        const pattern =  new RegExp('[+]380[(]\\d{2}[)]\\d{3}[-]\\d{2}[-]\\d{2}');

        const message = "Phone must be following format +380(xx)xxx-xx-xx";
        
        if (pattern.test(value) && value.length<18) {
          AccountController.$setValidity('phone', true);
          const index = scope.messages.indexOf(message);
          if (index > -1) {
            scope.messages.splice(index, 1);
          }
        } else {
          AccountController.$setValidity('phone', false);
          if(scope.messages.indexOf(message) < 0)
          scope.messages.push(message);
        }
        return value;
      }
      AccountController.$parsers.push(phoneValidation);
    }
  };
});