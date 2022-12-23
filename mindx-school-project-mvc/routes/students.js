const express = require("express");

const router = express.Router();

// @route     GET /api/v1/students
// @desc      Get all students
// @access    Public
router.get("/", async (req, res) => {});

// @route     GET /api/v1/student/:id
// @desc      Get a student by id
// @access    Public
router.get("/:id", async (req, res) => {});

// @route     POST /api/v1/students
// @desc      Create new student
// @access    Public
router.post("/", async (req, res) => {});

// @route     PUT /api/v1/students
// @desc      Update a student by id
// @access    Public
router.put("/:id", async (req, res) => {});

// @route     DELETE /api/v1/students
// @desc      Delete a student by id
// @access    Public
router.delete("/:id", async (req, res) => {});

module.exports = router;
