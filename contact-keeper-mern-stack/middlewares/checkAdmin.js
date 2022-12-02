const checkAdminMiddleware = (req, res, next) => {
  const { role } = req.query;
  if (role === "admin") {
    next();
  } else {
    res.status(401).json({
      msg: "Unauthorized",
    });
  }
};

module.exports = checkAdminMiddleware;
