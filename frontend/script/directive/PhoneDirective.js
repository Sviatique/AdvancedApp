'use strict';

const phoneDirective = function(){
    return {
    require: 'ngModel',
    link: function(scope, element, attr) {
      function phoneValidation(value) {
        const phoneElement = scope.newAccForm.phone;
        const pattern =  new RegExp('[+]380[(]\\d{2}[)]\\d{3}[-]\\d{2}[-]\\d{2}');
        const message = "Phone must be following format +380(xx)xxx-xx-xx";

        if (pattern.test(value) && value.length<18) {
          phoneElement.$setValidity("phone", true);
          const index = scope.messages.indexOf(message);
          if (index > -1) {
            scope.messages.splice(index, 1);
          }
        } else {
          phoneElement.$setValidity("phone", false);
          if(scope.messages.indexOf(message) < 0 && scope.newAccForm.phone.$dirty)
          scope.messages.push(message);
        }
        return value;
      }
      scope.newAccForm.phone.$validators['phone-validation'] = phoneValidation;
    }
  };
};

angular.module('App').directive('phoneDirective', phoneDirective);