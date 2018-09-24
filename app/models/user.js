const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    _id : { type : string, default: ''},
    displayName : { type : String, default: ''},
    email : { type : String, default: ''},
    password : { type : String, default: ''}
});