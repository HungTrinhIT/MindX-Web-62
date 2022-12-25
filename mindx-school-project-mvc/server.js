require('dotenv').config();

const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const { connectToDB } = require('./config/db');
const upload = require('./helpers/uploadFile');

const app = express();
const PORT = 3001;

// Connect mongodb
connectToDB();

// Middlewares
app.use(cors('*'));
app.use(express.json());
app.use(express.static(__dirname));

// Setup routes
app.use('/api/v1/', apiRouter);

app.post('/test', upload.single('images'), (req, res) => {
  console.log(req.file);
  res.json({
    message: 'test',
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
