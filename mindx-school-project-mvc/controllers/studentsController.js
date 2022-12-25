const User = require('../models/User');
const bcrypt = require('bcryptjs');
const validationMongoId = require('../helpers/validationMongoId');
const { signJWt } = require('../helpers/jwt');

const fetchAllStudents = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      res.status(404).json({
        message: 'Not Found',
      });
    }

    res.json({
      message: 'Success',
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const fetchStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'Id is valid',
      });
    }

    // const checkUserSameId = req.decode === id;
    // console.log(id);

    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({
        message: 'Not Found',
      });
    }

    res.json({
      message: 'Success',
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const createStudent = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        msg: 'User already exists',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      password: hashedPassword,
      email,
      role,
    });
    await user.save();

    res.json({
      message: 'Success',
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;

    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'Id is valid',
      });
    }
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(400).json({
        msg: 'User not exists',
      });
    }

    await User.findByIdAndUpdate(id, {
      username,
      email,
    });

    res.json({
      message: 'Success',
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);
    if (!isValid) {
      res.status(404).json({
        message: 'Id is valid',
      });
    }

    await User.findByIdAndDelete(id);

    res.json({
      message: 'Success',
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({
      msg: 'Missing require keys',
    });
  }

  // Check isExist user
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    return res.status(400).json({
      msg: 'Invalid credentials',
    });
  }

  // Match password
  const isMatchPassword = await bcrypt.compare(password, existingUser.password);
  if (!isMatchPassword) {
    return res.status(400).json({
      msg: 'Invalid credentials',
    });
  }

  const payload = {
    id: existingUser._id,
    username: existingUser.username,
    role: existingUser.role,
  };

  const token = signJWt(payload);

  // Response client
  return res.json({
    isAuthenticated: true,
    accessToken: token,
  });
};

module.exports = {
  fetchAllStudents,
  fetchStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  login,
};
