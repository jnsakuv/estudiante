var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    user: { type: String },
    email: { type: String },
    password: { type: String }
});


module.exports = mongoose.model('user', UserSchema);