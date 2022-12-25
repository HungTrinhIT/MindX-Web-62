const { verifyToken } = require('../helpers/jwt');

//check login
function authMdw(req, res, next) {
  const bearer = req.headers.authorization;
  const token = bearer.split(' ')[1];

  const decode = verifyToken(token);
  req.decode = decode;

  if (decode) {
    next();
  } else {
    res.json({
      message: 'Need login',
    });
  }
}

//check is admin
function adminMdw(req, res, next) {
  const bearer = req.headers.authorization;
  const token = bearer.split(' ')[1];

  const decode = verifyToken(token);
  req.decode = decode;

  if (decode.role === 'admin') {
    next();
  } else {
    res.json({
      message: 'Is not admin',
    });
  }
}

module.exports = { authMdw, adminMdw };
