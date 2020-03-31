const LTBData = require("../models/modelLTB");

module.exports = {
  createLTB: (req, res) => {
    let newLTB = {
      date: req.body.date,
      line: req.body.selectedLine,
      machine: req.body.selectedMc,
      problemDesc: req.body.problemDesc,
      analysis: req.body.analysis,
      rootcause: req.body.rootcause,
      duration: req.body.duration,
      countermeasure: req.body.countermeasure,
      pic: req.body.pic,
      status: req.body.status
    };
    LTBData.create(newLTB)
      .then(result => {
        res.status(201).json({
          message: "Success",
          data: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Error",
          err: err.message
        });
      });
  },
  getAllLTBs: (req, res) => {
    LTBData.find({})
      .then(result => {
        res.status(201).json({
          message: "Success",
          data: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Error",
          err: err.message
        });
      });
  }
};
