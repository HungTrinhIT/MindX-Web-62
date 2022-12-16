const express = require("express");
const bodyParser = require("body-parser");
const { connectToDb, db } = require("./db");
const { ObjectId } = require("mongodb");
const app = express();

const port = 3000;

app.use(bodyParser.json());

const studentRouter = express.Router();
app.use("/students", studentRouter);
// CRUD
// Create
studentRouter.post("/", async (req, res) => {
  const { name, age, address, hobbies } = req.body;

  await db.students.insertOne({
    name: name,
    age: age,
    address: address,
    hobbies: hobbies,
  });
  res.send("Inserted");
});

// Read
studentRouter.get("/", async (req, res) => {
  const students = await db.students
    .find({}).toArray();
  res.json(students);
});

studentRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const student = await db.students.findOne({
    _id: new ObjectId(id),
  });
  res.send(student);
});

// Update
studentRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, age, address, hobbies } = req.body;
  await db.students.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        name: name,
        age: age,
        address: address,
        hobbies: hobbies,
      },
    }
  );
  res.send("Updated");
});

studentRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await db.students.deleteOne({
    _id: new ObjectId(id),
  });
  res.send("Deleted");
});

app.listen(port, () => {
  connectToDb();
});
