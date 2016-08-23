'use strict';

const ageDirective = function(){
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
};

angular.module('App').directive('ageDirective', ageDirective);