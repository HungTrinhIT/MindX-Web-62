const express = require("express");
const StudentController = require("../controllers/studentsController");
const { authMdw, adminMdw } = require("../middlewares/authMdw");
const router = express.Router();

// @route     GET /api/v1/students
// @desc      Get all students
// @access    admin
router.get("/", adminMdw, StudentController.fetchAllStudents);

// @route     GET /api/v1/students/:id
// @desc      Get a student by id
// @access    admin
router.get("/:id", authMdw, StudentController.fetchStudent);

// @route     POST /api/v1/students
// @desc      Create new student
// @access    Public
router.post("/", StudentController.createStudent);

// @route     PUT /api/v1/students
// @desc      Update a student by id
// @access    Public
router.put("/:id", authMdw, StudentController.updateStudent);

// @route     DELETE /api/v1/students
// @desc      Delete a student by id
// @access    Public
router.delete("/:id", adminMdw, StudentController.deleteStudent);

router.post("/login", StudentController.login);

module.exports = router;
