const express = require('express');
const router = express.Router();
const Playlist = require('../../models/playlist');
// const playlistCtrl = require('../../controllers/playlist');

router.post('/', (req, res) => {
    var newPlaylist = new Playlist(req.body);
    newPlaylist.save((err, doc) => {
        if (err) {
            res.send(err);
        } else {
            res.send(doc)
        }
    });
});

router.get('/', async (req, res) => {
    await Playlist.find({}, function(err, playlists) {
        if (err) {
            return next(err);
        }
        if (playlists) {
            return res.json(playlists);
        }
        console.log('is the db even on?');
        return null;
    })  
})

module.exports = router;