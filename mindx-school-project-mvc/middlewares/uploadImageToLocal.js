const { MulterError } = require("multer");
const imageUploadService = require("../helpers/uploadImage");

const imageUploadLocal = (req, res, next) => {
  // Will be returned a multer middleware
  const uploader = imageUploadService.single("image");

  uploader(req, res, (err) => {
    if (err instanceof MulterError) {
      return res.status(400).json({
        msg: err.message,
      });
    } else if (err) {
      return res.status(500).json({
        msg: err.message,
      });
    } else {
      next();
    }
  });
};

module.exports = imageUploadLocal;
