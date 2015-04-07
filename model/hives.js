/**
 * Created by roberto on 22/03/15.
 */

Hives = new Mongo.Collection("hives");

Hives.allow({
    insert: function(userId, hive) {
        return userId && hive.owner === userId;
    },
    update: function(userId, hive, fields, modifier) {
        if (userId !== hive.owner)
            return false;

        return true;
    },
    remove: function(userId, hive) {
        if (userId !== hive.owner)
            return false;

        return true;
    }

});
