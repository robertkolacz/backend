const User = require('./../models/user');

module.exports = function(app) {
    app.get('/users', function(req, res) {
        User.find({},function(err,users){
            if(err) throw err;
            res.send(users);
        });
    });

    app.post('/users', function(req, res) {
        User(req.body)
            .save(function (err, data) {
                if (err) throw err;
                res.json(data);
            });
    });
};