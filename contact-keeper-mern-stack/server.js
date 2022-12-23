require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactRouter = require("./routes/contacts");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const logMiddleware = require("./middlewares/log");
const { connectToDB } = require("./config/db");
const app = express();
const PORT = 3001;

// Connect to database
connectToDB();

// Middlewares
app.use(cors("*"));
app.use(express.json());
app.use(logMiddleware);

app.use("/api/v1/contacts", contactRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
