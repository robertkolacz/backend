const admin = require('firebase-admin');
const User = require('./../models/user');

/*
TODO:
- add profile (user) model (X)
- users.js like profiles.js/app.Post but not only to db - to firebase & mongodb in the same moment, to avoid inconsistency in users
- https://firebase.google.com/docs/auth/admin/manage-users -> Create user -> UserID passed from Firebase, not the automatically generated one
*/

module.exports = function(app) {
    app.get('/users', function(req, res) {
        User.find({},function(err,users){
            if(err) throw err;
            res.send(users);
        });
    });

    app.post('/users',function(req, res) {
        User(req.body)
            .save(function (err, data) {
                if (err) throw err;
                res.json(data);
            });
    });
};


