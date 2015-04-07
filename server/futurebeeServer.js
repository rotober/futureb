/**
 * Created by roberto on 22/03/15.
 */

Meteor.publish("hives", function(options, searchString) {

    if (searchString == null)
        searchString = '';

    Counts.publish(this, 'numberOfHives', Hives.find({
        'name' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' },
        $or:[
            {$and:[
                {"public": true},
                {"public": {$exists: true}}
            ]},
            {$and:[
                {owner: this.userId},
                {owner: {$exists: true}}
            ]}
        ]}), { noReady: true });
    return Hives.find({
        'name' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' },
        $or:[
            {$and:[
                {"public": true},
                {"public": {$exists: true}}
            ]},
            {$and:[
                {owner: this.userId},
                {owner: {$exists: true}}
            ]}
        ]} ,options);
});
