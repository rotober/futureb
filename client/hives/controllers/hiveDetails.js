/**
 * Created by roberto on 22/03/15.
 */

angular.module("futurebee").controller("HiveDetailsCtrl", ['$scope', '$stateParams', '$meteor',
    function($scope, $stateParams, $meteor){

        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.hive = $meteor.object(Hives, $stateParams.hiveId);

        var subscriptionHandle;
        $meteor.subscribe('hives').then(function(handle) {
            subscriptionHandle = handle;
        });

        $scope.$on('$destroy', function() {
            subscriptionHandle.stop();
        });

 /**       $scope.save = function() {
            $scope.hive.save().then(function(numberOfDocs) {
                console.log('Save successful, doc affected: ', numberOfDocs);
            }, function(error) {
                console.log('Save error', error);
            });
        };

        $scope.reset = function() {
            $scope.hive.reset();
        };
  */

    }]);
