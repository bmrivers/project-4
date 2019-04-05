const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // Send back a JWT instead of the user
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

function createJWT(user) {
  // the method that creates the token
  return jwt.sign(
    // 1. create an obj of data payload
    // we want our token to have a userkey
    {user: user},
    // 2. the secret string to sign the token
    SECRET,
    // 3. expiration object
    // {expiresIn: '24h'}

  )
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

// don't forget this:
module.exports = {
  signup,
  login
};