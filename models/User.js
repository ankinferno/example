var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({

    username: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('User', UserSchema);