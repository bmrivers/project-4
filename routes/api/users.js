const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

router.get('/all', async function(req, res, next) {
    console.log("users");
    await User.find({}, function(err, users) {
        if (err) {
            return next(err);
        }
        if(users) {
            res.json(users);
        }
        console.log('is the db even on?');
        return null;
    })
});

/*---------- Protected Routes ----------*/


module.exports = router;