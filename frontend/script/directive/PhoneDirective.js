'use strict';

const phoneDirective = function(){
    return {
    require: 'ngModel',
    link: function(scope, element, attr, DialogController) {
      function phoneValidation(value) {
        const phoneElement = scope.newAccForm.phone;
        const pattern =  new RegExp('[+]380[(]\\d{2}[)]\\d{3}[-]\\d{2}[-]\\d{2}');
        if (pattern.test(value) && value.length<18) {
          DialogController.$setValidity("phone", true);
        } else {
          DialogController.$setValidity("phone", false);
        }
        return value;
      }
      scope.newAccForm.phone.$validators['phone-validation'] = phoneValidation;
    }
  };
};

angular.module('App').directive('phoneDirective', phoneDirective);