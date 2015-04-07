/**
 * Created by roberto on 22/03/15.
 */

angular.module("futurebee").run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("stateChangeError", function(event, next, previous, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === "AUTH_REQUIRED") {
            $location.path("/hives");
        }
    });
}]);

angular.module("futurebee").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('hives', {
                url: '/hives',
                templateUrl: 'client/hives/views/hives-list.ng.html',
                controller: 'HiveListCtrl'
            })
            .state('hiveDetails', {
                url: '/hives/:hiveId',
                templateUrl: 'client/hives/views/hive-details.ng.html',
                controller: 'HiveDetailsCtrl',
                resolve: ["$meteor", function($meteor) {
                    return $meteor.requireUser();
                }]
            });

        $urlRouterProvider.otherwise("/hives");
    }]);

