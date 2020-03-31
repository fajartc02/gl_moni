const router = require("express")();
const {
  createAccident,
  getAccidents
} = require("../controllers/controllerAccidentData");
const { createAv, getAvs } = require("../controllers/controllerAvData");
const { getAllLTBs, createLTB } = require("../controllers/contollerLTBData");

router.post("/createAccident", createAccident);
router.get("/getAccidents", getAccidents);

router.post("/createAv", createAv);
router.get("/getAvs", getAvs);

router.post("/createLTB", createLTB);
router.get("/getLTBs", getAllLTBs);

module.exports = router;
