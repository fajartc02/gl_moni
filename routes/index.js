const express = require("express");
const router = express.Router();
const { signin, signup } = require("../controllers/controllerUsers");

router.post("/signin", signin);
router.post("/signup", signup);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
