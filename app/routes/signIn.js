const firebase = require('./../utilities/firebase');
const User = require('./../models/user');

module.exports = function(app) {
    app.post('/signIn', function (req, res) {
        console.log(req.body);
        firebase.auth()
            .createUserWithEmailAndPassword(req.body.email, req.body.password)
            .then(res => res.user)
            .catch(error => {
                console.log(error.message);
                throw error.message;
            })
            .then(user => User({
                    email: req.body.email,
                    _id: user.uid
                }).save(function (err, data) {
                    if (err) throw err;
                    res.json(data);
                })
            )
            // catch, ktory usuwa z firebase jak nie udalo sie w mongo
    });
};
