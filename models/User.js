var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    playlists: [String]
})

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      if (err) return next(err);
      // replace the user provided password with the hash
      user.password = hash;
      next();
    });
  });

module.exports = mongoose.model('User', userSchema);