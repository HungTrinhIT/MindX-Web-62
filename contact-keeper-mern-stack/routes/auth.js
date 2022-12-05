const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

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

  const SERCET_KEY = process.env.JWT_SERCET_KEY;
  console.log({SERCET_KEY})

  const token = jwt.sign(payload, SERCET_KEY, {
    expiresIn: 600000,
  });

  // Response client
  return res.json({ token });
});

module.exports = router;
