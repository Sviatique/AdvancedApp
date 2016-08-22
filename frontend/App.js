
const app = angular.module('App', []);

app.controller('AccountController',
function($scope) {
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:1337/Account', true);
// xhr.send();
// if (xhr.status === 200) {
//     console.log( xhr.responseText );
  
// } else {
// console.log( xhr.status + ': ' + xhr.statusText ); 
// }
    const accounts = {
        '0': {
            name: 'Bob',
            email: 'Bob@gmail.com',
            login: 'bob123',
            avatarUrl: 'http://ultraimg.com/images/2016/07/29/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg',
            age: 25,
            gender: 'Male',
            phoneNumber: 9379992
        },
        '1': {
            name: 'Ivan',
            email: 'Ivan@mail.ru',
            login: 'Ivan321',
            avatarUrl: 'https://3.bp.blogspot.com/-W__wiaHUjwI/Vt3Grd8df0I/AAAAAAAAA78/7xqUNj8ujtY/s1600/image02.png',
            age: 37,
            gender: 'Male',
            phoneNumber: 2802938
        }
    };
    $scope.accounts = accounts;

});

