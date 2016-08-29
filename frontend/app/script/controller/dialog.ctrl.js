'use strict';

const dialogController = function($scope, $mdDialog, accData, mode){
    $scope.valid = false;
    $scope.name = accData.name || "";
    $scope.age = accData.age || 18;
    $scope.gender = accData.gender || "Male";
    $scope.phone = accData.phoneNumber || "";
    $scope.email = accData.email || "";
    $scope.login = accData.login || "";
    $scope.phonePattern = '[+]380[(]\\d{2}[)]\\d{3}[-]\\d{2}[-]\\d{2}';
    $scope.emailPattern = '[a-zA-Z]{1}[\\w\\.]*[a-zA-Z]{1}@[a-zA-Z]{1}[\\w\\.]*[a-zA-Z]{1}[\\.][a-zA-Z]{2,3}';
    $scope.mode = mode + ' account';
    
    $scope.submit = function() {
        const data = {
            name: $scope.name,
            login: $scope.login,
            age: $scope.age,
            gender: $scope.gender,
            phoneNumber: $scope.phone,
            email: $scope.email
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

dialogController.$inject = ['$scope','$mdDialog', 'accData', 'mode'];

export default dialogController;

