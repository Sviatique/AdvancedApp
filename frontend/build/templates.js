angular.module('templatesCache', []).run(['$templateCache', function($templateCache) {$templateCache.put('accountEdit.tmpl.html','\r\n<md-dialog aria-label="Creating account" style="min-width: 40%">\r\n    <form name="newAccForm" ng-submit="vm.submit()" ng-cloak>\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>{{vm.mode}}</h2>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-dialog-content>\r\n            <div class="md-dialog-content">\r\n                <div id="newAcc">\r\n                    Name: <input type="text" ng-minlength="3" ng-maxlength="18" ng-model="vm.name" name="name" required> Age: <input type="number" ng-required="integer" min="18" max="100" ng-min="18" ng-max="100" ng-model="vm.age" name="age"> Gender:\r\n                    <select ng-model="vm.gender">\r\n                    <option>male</option>\r\n                    <option>female</option>\r\n                    </select> Phone number: <input type="text" ng-pattern="vm.phonePattern" ng-model="vm.phone" name="phone" required> Email: <input type="text" ng-pattern="vm.emailPattern" ng-model="vm.email" name="email" required> Login: <input type="text"\r\n                        ng-minlength="5" ng-maxlength="15" ng-model="vm.login" name="login" required>\r\n                    <div class="messages">\r\n                        <div ng-show="newAccForm.name.$dirty && newAccForm.name.$invalid">\r\n                            Name must be from 3 to 18 characters\r\n                        </div>\r\n                        <div ng-show="newAccForm.age.$dirty && newAccForm.age.$invalid">\r\n                            Age must be from 18 to 100\r\n                        </div>\r\n                        <div ng-show="newAccForm.phone.$dirty && newAccForm.phone.$invalid">\r\n                            Phone number must match the following format: +380(xx)xxx-xx-xx\r\n                        </div>\r\n                        <div ng-show="newAccForm.email.$dirty && newAccForm.email.$invalid">\r\n                            Please, enter correct email\r\n                        </div>\r\n                        <div ng-show="newAccForm.login.$dirty && newAccForm.login.$invalid">\r\n                            Login must be from 5 to 15 characters\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </md-dialog-content>\r\n\r\n        <md-dialog-actions layout="row">\r\n            <span flex></span>\r\n            <md-button type="submit">\r\n                {{vm.mode}}\r\n            </md-button>\r\n            <md-button ng-click="vm.cancel()">\r\n                Cancel\r\n            </md-button>\r\n\r\n\r\n\r\n        </md-dialog-actions>\r\n    </form>\r\n</md-dialog>');
$templateCache.put('accountInfo.tmpl.html','<div class="account">\r\n    <div class=" ng-cloak">\r\n        <img class="avatar" ng-src={{vm.person.avatarUrl}}> </img>\r\n        <p> Name: {{vm.person.name}}</p>\r\n        <p> Email: {{vm.person.email}}</p>\r\n        <p> Login: {{vm.person.login}}</p>\r\n    </div>\r\n    <md-button class="md-raised" ng-click="vm.modifyAccount($event)">\r\n        Modify\r\n    </md-button>\r\n    <md-button class="md-raised" ng-click="vm.deleteAccount($event)">\r\n        Delete\r\n    </md-button>\r\n\r\n    <div>\r\n        <p> Gender: {{vm.person.gender}}</p>\r\n        <p> Age: {{vm.person.age}}</p>\r\n        <p> Phone number: {{vm.person.phoneNumber}}</p>\r\n        <div id="activityChart"> </div>\r\n\r\n    </div>\r\n</div>');
$templateCache.put('accountList.tmpl.html','<div>\r\n    <md-button class="md-primary md-raised" ng-click="vm.newAccount($event)">\r\n        Add account\r\n    </md-button>\r\n    <div ng-repeat="person in vm.accounts" class="account">\r\n        <a href="#/accounts/{{person.id}}">\r\n            <div class="account ng-cloak">\r\n                <img class="avatar" ng-src={{person.avatarUrl}}> </img>\r\n                <p> Id: {{person.id}} </p>\r\n                <p> Name: {{person.name}}</p>\r\n                <p> Email: {{person.email}}</p>\r\n                <p> Login: {{person.login}}</p>\r\n            </div>\r\n        </a>\r\n    </div>\r\n\r\n</div>');}]);