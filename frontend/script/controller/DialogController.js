'use strict';

const DialogController = function($scope, $mdDialog, accData){
    $scope.valid = false;
    $scope.name = accData.name || "";
    $scope.age = accData.age || 18;
    $scope.gender = accData.gender || "Male";
    $scope.phone = accData.phoneNumber || "";
    $scope.email = accData.email || "";
    $scope.login = accData.login || "";
    $scope.phonePattern = "[+]380[(]\\d{2}[)]\\d{3}[-]\\d{2}[-]\\d{2}";
    $scope.emailPattern = "[a-zA-Z]{1}[\\w\\.]*[a-zA-Z]{1}@[a-zA-Z]{1}[\\w\\.]*[a-zA-Z]{1}[\\.][a-zA-Z]{2,3}";
    $scope.submit = function() {
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

DialogController.$inject = ["$scope","$mdDialog", 'accData'];

angular.module('App').controller('DialogController', DialogController);

