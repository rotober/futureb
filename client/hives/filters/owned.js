/**
 * Created by roberto on 07/04/15.
 */

angular.module("futurebee").filter('owned', function () {
    return function (users, hive) {
        if (!hive)
            return false;

        return _.filter(users, function (user) {
            if (user._id == hive.owner ||
                _.contains(party.invited, user._id))
                return false;
            else
                return true;
        });
    }
});
