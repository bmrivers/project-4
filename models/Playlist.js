const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    playlistName: String,
    author: String, // User
    // tracks: [String] // or keys
    tracks: [String]
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Playlist', PlaylistSchema);