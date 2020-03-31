const AvData = require("../models/modelAv");

module.exports = {
  createAv: (req, res) => {
    let avSubmitted = {
      date: req.body.date,
      line: req.body.line,
      machine: req.body.machine,
      avAchievement: req.body.avAchievement,
      status: req.body.status
    };
    AvData.create(avSubmitted)
      .then(result => {
        res.status(201).json({
          message: "Success",
          data: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "err",
          data: err.message
        });
      });
  },
  getAvs: (req, res) => {
    AvData.find({})
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
