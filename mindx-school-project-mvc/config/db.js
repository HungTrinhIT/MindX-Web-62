const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("DB connected ...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = { connectToDB };
