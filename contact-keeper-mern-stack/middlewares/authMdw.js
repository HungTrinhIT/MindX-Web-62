const jwt = require("jsonwebtoken");

const authMdw = (req, res, next) => {
  // Step 1: get token from header
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(400).json({
      msg: "Access token is required",
    });
  }

  // Step 2: Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded) {
      req.user = decoded;
      next();
    }
  } catch (error) {
    res.status(401).json({
      msg: "Invalid token, no authorization!",
    });
  }
};

module.exports = authMdw;
