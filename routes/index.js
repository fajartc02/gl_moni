var express = require("express");
var router = express.Router();
const { signin, signup } = require("../controllers/controllerUsers");
const dataSubmit = require("./dataSubmit");
// console.log("masuk");

router.use("/data", dataSubmit);

router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router;
