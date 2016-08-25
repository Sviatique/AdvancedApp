'use strict';

const ageDirective = function(){
    return {
    require: 'ngModel',
    link: function(scope, element, attr, DialogController) {
      function ageValidation(value) {
        if (value && value > 17 && value < 100 && Number.isInteger(value)) {
          DialogController.$setValidity('Age', true);
        } else {
          DialogController.$setValidity('Age', false);
        }
        return value;
      }
      DialogController.$parsers.push(ageValidation);
    }
  };
};

angular.module('App').directive('ageDirective', ageDirective);