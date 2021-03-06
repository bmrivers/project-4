const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    playlistName: String,
    author: String, // User
    // tracks: [String] // or keys
    tracks: [{
      artist: String,
      img: String,
      name: String,
    }]
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Playlist', PlaylistSchema);