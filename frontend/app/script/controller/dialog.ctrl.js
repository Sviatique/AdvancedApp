'use strict';
const phonePattern = '[+]380[(]\\d{2}[)]\\d{3}[-]\\d{2}[-]\\d{2}';
const emailPattern = '[a-zA-Z]{1}[\\w\\.]*[a-zA-Z]{1}@[a-zA-Z]{1}[\\w\\.]*[a-zA-Z]{1}[\\.][a-zA-Z]{2,3}';

const dialogController = function ($mdDialog, accData, mode) {
    this.valid = false;
    this.name = accData.name || '';
    this.age = accData.age || 18;
    this.gender = accData.gender || 'male';
    this.phone = accData.phoneNumber || '';
    this.email = accData.email || '';
    this.login = accData.login || '';
    this.phonePattern = phonePattern;
    this.emailPattern = emailPattern;
    this.mode = mode + ' account';

    this.submit = () => {
        const data = {
            name: this.name,
            login: this.login,
            age: this.age,
            gender: this.gender,
            phoneNumber: this.phone,
            email: this.email
        };
        $mdDialog.hide(data);
    };

    this.cancel = () => {
        $mdDialog.cancel();
    };


};

dialogController.$inject = ['$mdDialog', 'accData', 'mode'];

export default dialogController;

