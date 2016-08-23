'use strict';

const DialogController = function($scope, $mdDialog){
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.hide = function() {
        $mdDialog.hide();
    };
    
  };

DialogController.$inject = ["$scope","$mdDialog"];

angular.module('App').controller('DialogController', DialogController);

