/**
 * Created by roberto on 22/03/15.
 */

Meteor.publish("users", function () {
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});
