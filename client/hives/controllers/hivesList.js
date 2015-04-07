/**
 * Created by roberto on 22/03/15.
 */



angular.module("futurebee").controller("HiveListCtrl", ['$scope', '$meteor',
    function($scope, $meteor) {

        $scope.page = 1;
        $scope.perPage = 3;
        $scope.sort = { name: 1 };
        $scope.orderProperty = '1';

        $scope.hives = $meteor.collection(function() {
            return Hives.find({}, {
                sort: $scope.getReactively('sort')
            });
        });

        $scope.autorun($scope, function() {
            $meteor.subscribe('hives', {
                limit: parseInt($scope.getReactively('perPage')),
                skip:  (parseInt($scope.getReactively('page')) - 1) * parseInt($scope.getReactively('perPage')),
                sort: $scope.getReactively('sort')
            }, $scope.getReactively('search')).then(function() {
                $scope.hivesCount = $meteor.object(Counts, 'numberOfHives', false);
            });
        });


        $scope.remove = function(hive) {
            $scope.hives.splice($scope.hives.indexOf(hive), 1);
        };

        $scope.pageChanged = function(newPage) {
            $scope.page = newPage;
        };

        $scope.$watch('orderProperty', function() {
            if ($scope.orderProperty)
                $scope.sort = {name: parseInt($scope.orderProperty)};
        });

    }]);
