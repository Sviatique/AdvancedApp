'use strict';

const nameDirective = function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, DialogController) {
      function nameValidation(value) {
        if (value && value.length > 2 && value.length <19) {
          DialogController.$setValidity('Name', true);
        } else {
          DialogController.$setValidity('Name', false);
        }
        return value;
      }
      
      DialogController.$parsers.push(nameValidation);
    }
  };
};

angular.module('App').directive('nameDirective', nameDirective);