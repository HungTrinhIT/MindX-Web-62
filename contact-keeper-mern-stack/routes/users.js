const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const UserModel = require("../models/User");

// API get all users
router.get("/", (req, res) => {
  const usersExceptingPassword = users.map((user) => {
    const { password, ...restUser } = user;
    // delete UserModel.password;
    return restUser;
  });

  res.json({
    data: usersExceptingPassword,
    msg: "Successfully",
  });
});

// API get information a user
router.get("/:id");

// API register a user
router.post("/", async (req, res) => {
  const { username, password, email } = req.body;

  // 1. Validation
  if (!username || !password || !email) {
    return res.status(400).json({
      msg: "Missing required keys",
    });
  }

  // 2. Check username đã tồn tại hay chưa
  // 3. Mã hoá password
  // 4. Thêm user => vào database
  try {
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      username,
      password: hashedPassword,
      email,
    });
    await user.save();
    // 5. Response
    res.status(201).json({
      msg: "Register successfully",
    });
  } catch (error) {
    console.log(error);
  }
});
router.put("/", (req, res) => {});
router.delete("/", (req, res) => {});

module.exports = router;
