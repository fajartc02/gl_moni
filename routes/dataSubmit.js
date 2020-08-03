const router = require("express")();
const {
  createAccident,
  getAccidents,
} = require("../controllers/controllerAccidentData");
const {
  createProblem,
  getProblemsData,
  editProblem,
  removeProblem,
  finishProblem,
} = require("../controllers/controllerProblemMonitoring");
const { createAv, getAvs } = require("../controllers/controllerAvData");
const { getAllLTBs, createLTB } = require("../controllers/contollerLTBData");
const {
  createWfh,
  getWfhs,
  editWfh,
  deleteWfh,
} = require("../controllers/controllerInputWfh");
const { createOee, getOee } = require("../controllers/controllerOeeMonitoring");

const {
  createShd,
  getShdToday,
  getShdTodayShift,
  getShdFirstDate,
  fillShd,
  getShdTodayShiftOK,
  getOneData,
} = require("../controllers/controllerShdConf");

router.post("/createShd", createShd);
router.post("/fillShd", fillShd);
router.get("/getShdToday", getShdToday);
router.get("/getShdFirstDate", getShdFirstDate);
router.get("/getShdTodayShift/:shift", getShdTodayShift);
router.get("/getShdTodayShiftOK/:shift", getShdTodayShiftOK);
router.get("/getShdOneData/:name", getOneData);

router.post("/createOee", createOee);
router.get("/getOee/:line", getOee);

router.post("/createProblem", createProblem);
router.get("/getProblemsData/:line", getProblemsData);
router.put("/completedProblem/:id", finishProblem);
// router.get('/getProblemsData/:line', getProblemsData)

router.post("/createWfh", createWfh);
router.get("/getWfhs", getWfhs);
router.get("/getWfhs/:date", getWfhs);
router.put("/editWfh/:id", editWfh);
router.delete("/deleted/:id", deleteWfh);

router.post("/createAccident", createAccident);
router.get("/getAccidents", getAccidents);

router.post("/createAv", createAv);
router.get("/getAvs", getAvs);

router.post("/createLTB", createLTB);
router.get("/getLTBs", getAllLTBs);

module.exports = router;
