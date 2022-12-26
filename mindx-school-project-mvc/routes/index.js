const express = require("express");

const studentRouter = require("./students");
const imageRouter = require("./image");

const router = express.Router();

router.use("/students", studentRouter);
router.use("/image", imageRouter);

module.exports = router;

/*


 Client     
        => HTTP request    
        => layer: routes   
        => layer: controllers (business logic)  (C)
        => layer: models (mongoose)  (M)
        => layer: database (mongodb)

*/
