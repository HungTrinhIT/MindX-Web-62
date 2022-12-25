const express = require('express');
const {
  fetchAllStudents,
  fetchStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  login,
} = require('../controllers/studentsController');
const { authMdw, adminMdw } = require('../middlewares/authMdw');
const router = express.Router();

// @route     GET /api/v1/students
// @desc      Get all students
// @access    Public
router.get('/', adminMdw, fetchAllStudents);

// @route     GET /api/v1/students/:id
// @desc      Get a student by id
// @access    Public
router.get('/:id', authMdw, fetchStudent);

// @route     POST /api/v1/students
// @desc      Create new student
// @access    Public
router.post('/', createStudent);

// @route     PUT /api/v1/students
// @desc      Update a student by id
// @access    Public
router.put('/:id', authMdw, updateStudent);

// @route     DELETE /api/v1/students
// @desc      Delete a student by id
// @access    Public
router.delete('/:id', adminMdw, deleteStudent);

router.post('/login', login);

module.exports = router;
