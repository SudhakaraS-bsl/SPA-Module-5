(function () {

    angular.module('Module5Assignment')
        .service('Module5Service', Module5Service)
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");

    Module5Service.$inject = ['$http', 'ApiBasePath'];

    function Module5Service($http, ApiBasePath) {
        var service = this;

        service.getMenuItems = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            });

            return response;
        };
    }
})();