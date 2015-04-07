/**
 * Created by roberto on 22/03/15.
 */

Meteor.startup(function() {
    if (Hives.find().count() === 0) {
        var hives = [
            {'code': 'Dubstep-Free Zone',
                'description': 'Can we please just for an evening not listen to dubstep.'},
            {'code': 'All dubstep all the time',
                'description': 'Get it on!'},
            {'code': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.'}
        ];

        for (var i = 0; i < hives.length; i++)
            Hives.insert({code: hives[i].code, description: hives[i].description});
    }
});
