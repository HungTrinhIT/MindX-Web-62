const cloudinary = require("cloudinary").v2;

cloudinary.config({
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
  cloud_name: "hypertal",
  secure: true,
});

const cloudinaryUploadImage = (path) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      {
        folder: "mindx-university",
      },
      (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("Result ne:", result);
          resolve(result);
        }
      }
    );
  });
};

module.exports = cloudinaryUploadImage;
