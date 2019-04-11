const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const TrackSchema = new Schema({
    name: String,
    artist: String, // User
    // tracks: [String] // or keys
    image: String
  });

module.exports = mongoose.model('Track', TrackSchema);