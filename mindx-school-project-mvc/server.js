require("dotenv").config();

const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");
const { connectToDB } = require("./config/db");

const app = express();
const PORT = 3001;

// Connect mongodb
connectToDB();

// Middlewares
app.use(cors("*"));
app.use(express.json());

// Setup routes
app.use("/api/v1/", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
