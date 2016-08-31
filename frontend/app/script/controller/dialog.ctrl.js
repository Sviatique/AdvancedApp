'use strict';
const phonePattern = '[+]380[(]\\d{2}[)]\\d{3}[-]\\d{2}[-]\\d{2}';
const emailPattern = '[a-zA-Z]{1}[\\w\\.]*[a-zA-Z]{1}@[a-zA-Z]{1}[\\w\\.]*[a-zA-Z]{1}[\\.][a-zA-Z]{2,3}';

const dialogController = function ($mdDialog, accData, mode) {
    const vm = this;
    
    vm.name = accData.name || '';
    vm.age = accData.age || 18;
    vm.gender = accData.gender || 'male';
    vm.genderSelect = ['male', 'female'];
    
    vm.phone = accData.phoneNumber || '';
    vm.email = accData.email || '';
    vm.login = accData.login || '';
    vm.phonePattern = phonePattern;
    vm.emailPattern = emailPattern;
    vm.mode = mode + ' account';

    vm.submit = () => {
        const data = {
            name: vm.name,
            login: vm.login,
            age: vm.age,
            gender: vm.gender,
            phoneNumber: vm.phone,
            email: vm.email
        };
        $mdDialog.hide(data);
    };

    vm.cancel = () => {
        $mdDialog.cancel();
    };


};

dialogController.$inject = ['$mdDialog', 'accData', 'mode'];

export default dialogController;

