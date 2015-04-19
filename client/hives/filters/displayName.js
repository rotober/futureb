/**
 * Created by roberto on 19/04/15.
 */

angular.module("futurebee").filter('displayName', function () {
    return function (user) {
        if (!user)
            return;
        if (user.profile && user.profile.name)
            return user.profile.name;
        else if (user.emails)
            return user.emails[0].address;
        else
            return user;
    }
});