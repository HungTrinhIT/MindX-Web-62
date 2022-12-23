require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors("*"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
