const express = require('express');
const router = express.Router();
const playlistCtrl = require('../../controllers/playlists');


router.post('/', playlistCtrl.create);

router.get('/:id', playlistCtrl.show)
router.get('/', playlistCtrl.index)

// update

// delete

module.exports = router;