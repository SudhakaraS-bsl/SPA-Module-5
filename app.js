(function () {
    'use strict';

    angular.module('Module5Assignment', [])
        .controller('Module5Controller', Module5Controller);

    Module5Controller.$inject = ['Module5Service'];
    
    function Module5Controller(Module5Service) {
        var ctrl = this;

        ctrl.users = [];
        ctrl.menuItems = [];
        ctrl.tempArray = [];
        ctrl.FirstName = "";
        ctrl.LastName = "";
        ctrl.EmailAddress = "";
        ctrl.PhoneNumber = "";
        ctrl.Favourite = "";
        ctrl.SignUp = false;
        ctrl.MyInfo = false;
        ctrl.LinktoSignUp = false;
        ctrl.userdetail = false;
        ctrl.isMenuItemExists = false;
        ctrl.isFormSaved = false;

        ctrl.ShowMyInfo = function () {
            ctrl.SignUp = false;
            ctrl.MyInfo = true;

            ctrl.ShowHideMyInfoDetails();
        }
        ctrl.ShowSignUp = function () {
            ctrl.SignUp = true;
            ctrl.MyInfo = false;
            ctrl.isFormSaved = false;
        }
        ctrl.validateMenuItem = function () {
            ctrl.isMenuItemExists = false;

            if (ctrl.menuItems.length == 0) {
                Module5Service.getMenuItems()
                    .then(function (result) {

                        ctrl.tempArray = result.data;
                        angular.forEach(ctrl.tempArray, function (value, key) {
                            angular.forEach(value.menu_items, function (value1, key1) {
                                ctrl.menuItems.push(value1);
                            });
                        });
                    })
                    .then(function () {
                        angular.forEach(ctrl.menuItems, function (value1, key1) {
                            if (value1.short_name == ctrl.Favourite) {
                                ctrl.isMenuItemExists = true;
                            }
                        });
                    });
            }
        }
        ctrl.signup = function () {

            var user = {
                "FirstName": ctrl.FirstName,
                "LastName": ctrl.LastName,
                "EmailAddress": ctrl.EmailAddress,
                "PhoneNumber": ctrl.PhoneNumber,
                "Favourite": ctrl.Favourite
            };
            ctrl.users.push(user);
            ctrl.isFormSaved = true;
        }
        ctrl.GotoSignUp = function () {
            ctrl.ShowSignUp();
        }
        ctrl.ShowHideMyInfoDetails = function () {
            if (ctrl.users.length == 0) {
                ctrl.LinktoSignUp = true;
                ctrl.userdetail = false;
            }
            else {
                ctrl.userdetail = true;
                ctrl.LinktoSignUp = false;
            }
        }
        ctrl.ShowHideMyInfoDetails();
    }
})();