'use strict';

const nameDirective = function() {
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
};

angular.module('App').directive('nameDirective', nameDirective);