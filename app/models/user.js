const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    _id : { type : String},
    email : { type : String}
});