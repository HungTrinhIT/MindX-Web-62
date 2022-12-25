const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET_KEY;
const EXPIRE_IN = process.env.JWT_EXPIRE_IN;

function signJWt(payload) {
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: EXPIRE_IN,
  });

  return token;
}

function verifyToken(token) {
  const decode = jwt.verify(token, SECRET_KEY);

  return decode;
}

module.exports = { signJWt, verifyToken };
