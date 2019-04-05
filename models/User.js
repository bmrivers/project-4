var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new userSchema({
    name: String,
    email: String,
    username: String,
    playlists: [String]
})

module.exports = mongoose.model('User', UserSchema);