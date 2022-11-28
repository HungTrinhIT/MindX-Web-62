const express = require("express");

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

router.get("/", (req, res) => {
  const usersExceptingPassword = users.map((user) => {
    const { password, ...restUser } = user;
    // delete user.password;
    return restUser;
  });

  res.json({
    data: usersExceptingPassword,
    msg: "Successfully",
  });
});
router.get("/:id");
router.post("/", (req, res) => {});
router.put("/", (req, res) => {});
router.delete("/", (req, res) => {});

module.exports = router;
