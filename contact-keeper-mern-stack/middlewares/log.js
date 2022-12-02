const logMiddleware = (req, res, next) => {
  const currentDate = new Date();
  console.log(`New request is coming ${currentDate}`);
  next();
};

module.exports = logMiddleware;
