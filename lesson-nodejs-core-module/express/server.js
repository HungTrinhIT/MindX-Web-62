const express = require("express");

const app = express();

// HTTP methods: GET, PUT, POST, PATCH, DELETE ,...

app.get("/", (req, res) => {
  res.json({
    data: [],
    statusCode: 200,
  });
});

app.listen(3001, () => {
  console.log("Server is running at PORT 3001");
});
