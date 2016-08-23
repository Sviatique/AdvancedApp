'use strict';

const DialogController = function($scope, $mdDialog){
    $scope.valid = false;
    $scope.messages = [];
    $scope.name = "";
    $scope.age = 18;
    $scope.gender = "Male";
    $scope.phone = "";
    $scope.mail = "";
    $scope.login = "";
    
    $scope.submit = function() {
        if($scope.messages.length != 0){
            return;
        }
        const data = {
            name: $scope.name,
            age: $scope.age,
            gender: $scope.gender,
            phone: $scope.phone,
            mail: $scope.mail,
            login: $scope.login
        };
        
        $mdDialog.hide(data);
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

