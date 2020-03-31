const AccidentData = require("../models/modelAccident");

module.exports = {
  createAccident: (req, res) => {
    let newAccident = {
      date: req.body.date,
      problemDesc: req.body.problemDesc,
      location: req.body.location,
      rootcause: req.body.rootcause,
      pic: req.body.pic,
      countermeasure: req.body.countermeasure
    };
    AccidentData.create(newAccident)
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
  getAccidents: (req, res) => {
    AccidentData.find({})
      .then(result => {
        res.status(201).json({
          message: "Success",
          data: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Error",
          data: err
        });
      });
  }
};
