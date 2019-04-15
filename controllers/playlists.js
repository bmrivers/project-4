const Playlist = require('../models/playlist');

module.exports = {
    index,
    show,
    create,
    // update
}

async function index(req, res) {
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
}

async function show(req, res) {
    await Playlist.findById(req.params.id, function(err, playlist) {
        return res.json(playlist);
    })
}

async function create(req, res) {
    var newPlaylist = new Playlist(req.body);
    // console.log(newPlaylist)
    try {
        await newPlaylist.save((err, doc) => {
            res.json({doc})
        });
    } catch (err) {
        res.status(400).json(err)
    }
}