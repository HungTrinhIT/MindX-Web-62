const express = require("express");
const jwt = require("jsonwebtoken");
const authMdw = require("../middlewares/authMdw");

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const EXPIRE_IN = process.env.JWT_EXPIRE_IN;

const users = [
  {
    id: "1",
    username: "cr7",
    password: "cr7123",
    email: "cr7@mu.com",
  },
  {
    id: "2",
    username: "messi",
    password: "messi123",
    email: "messi@paris.com",
  },
  {
    id: "3",
    username: "admin",
    password: "admin123",
    email: "admin@gmail.com",
  },
];

//API get user info by token
router.get("/", authMdw, (req, res) => {
  const { id } = req.user;
  const existingUser = users.find((user) => user.id === id);
  res.json({
    data: existingUser,
    msg: "Successfully",
  });
});

//API Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({
      msg: "Missing require keys",
    });
  }

  // Check isExist user
  const existingUser = users.find(
    (user) => user.password === password && user.username === username
  );

  if (!existingUser) {
    return res.status(400).json({
      msg: "User does not exist",
    });
  }

  // Create token (accessToken) => JWT
  delete existingUser.password;
  const payload = { ...existingUser };

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
