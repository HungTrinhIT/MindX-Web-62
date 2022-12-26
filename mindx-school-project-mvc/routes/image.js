const express = require("express");
const imageUploadLocal = require("../middlewares/uploadImageToLocal");
const cloudinaryUploadImage = require("../helpers/cloudinaryUploadImage");

const router = express.Router();

router.post("/upload", imageUploadLocal, async (req, res) => {
  const file = req.file;
  try {
    const { secure_url, height, width } = await cloudinaryUploadImage(
      file.path
    );
    return res.status(201).json({
      imageUrl: secure_url,
      imageInfo: {
        height,
        width,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return res.json({ msg: "Success" });
});

module.exports = router;

/*
    - Upload image => local => multer
        1. 2. 3
        
    - cloudinary sdk => upload image cloudinary => {cdn_link}

    - cdn_link => ...
*/
