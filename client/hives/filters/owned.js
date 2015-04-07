/**
 * Created by roberto on 07/04/15.
 */

angular.module("futurebee").filter('owned', function () {
    return function (users, hive) {
        if (!hive)
            return false;

        return _.filter(users, function (user) {
            if (user._id == hive.owner)
                return true;
            else
                return false;
        });
    }
});
