const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authMdw = require("../middlewares/authMdw");
const UserModel = require("../models/User");

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const EXPIRE_IN = process.env.JWT_EXPIRE_IN;

// API get user by token: http://localhost:3001/api/v1/auth
router.get("/", authMdw, (req, res) => {
  const user = req.user;
  res.json({
    user,
  });
});

//API Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({
      msg: "Missing require keys",
    });
  }

  // Check isExist user
  const existingUser = await UserModel.findOne({ username });
  if (!existingUser) {
    return res.status(400).json({
      msg: "Invalid credentials",
    });
  }

  // Match password
  const isMatchPassword = await bcrypt.compare(password, existingUser.password);
  if (!isMatchPassword) {
    return res.status(400).json({
      msg: "Invalid credentials",
    });
  }

  const payload = {
    id: existingUser._id,
    username: existingUser.username,
  };

  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: EXPIRE_IN,
  });

  // Response client
  return res.json({
    isAuthenticated: true,
    accessToken: token,
  });
});

module.exports = router;
