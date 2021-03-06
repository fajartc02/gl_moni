const shdData = require("../models/modelShdConf");
const axios = require("axios");

module.exports = {
  createShd: (req, res) => {
    let newShd = {
      date: req.body.date,
      name: req.body.name,
      shift: req.body.shift,
      status: "OK",
    };
    shdData
      .findOne({
        name: { $regex: `${req.body.name}` },
        shift: req.body.shift,
        date: req.body.date,
      })
      .then(async (result) => {
        console.log(result);
        if (result === null) {
          let doc = await shdData.findOne({
            name: { $regex: `${req.body.name}` },
            shift: req.body.shift,
            date: req.body.date,
          });
          doc.name = req.body.name;
          doc.shift = req.body.shift;
          doc.status = "OK";
          doc.date = req.body.date;
          console.log(doc);

          await doc.save();
          res.status(201).json({
            message: "edited",
          });
        } else {
          if (result.status == "OK") {
            res.status(500).json({
              message: "Duplicate SHD Input",
              // err: err.message
            });
          } else {
            let doc = await shdData.findOne({
              name: { $regex: `${req.body.name}` },
              shift: req.body.shift,
              date: req.body.date,
            });
            doc.name = result.name;
            doc.shift = req.body.shift;
            doc.status = "OK";
            doc.date = req.body.date;
            console.log(doc);

            await doc.save();
            res.status(201).json({
              message: "edited",
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  fillShd: (req, res) => {
    let newShd = {
      date: req.body.date,
      name: req.body.name,
      shift: req.body.shift,
      status: "NG",
    };
    shdData
      .create(newShd)
      .then(() => {
        res.status(201).json({
          message: "Success To Fill SHD Input",
          // data: result.data
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error To Fill SHD Input",
          err: err.message,
        });
      });
  },
  getOneData: (req, res) => {
    shdData
      .findOne({
        name: { $regex: `${req.params.name}` },
        date: "2020-06-02",
      })
      .then((result) => {
        res.status(200).json({
          message: "Success Get One Data",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error Get One Data",
          err: err.message,
        });
      });
  },
  getShdFirstDate: (req, res) => {
    shdData
      .find({ date: "2020-06-02" })
      .then((result) => {
        res.status(200).json({
          message: "Success Get Data 02 June 2020",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error Get Data 02 June 2020",
          err: err.message,
        });
      });
  },
  getCovidData: (req, res) => {
    axios
      .get("https://api.kawalcorona.com/indonesia")
      .then((resCovid) => {
        console.log(resCovid);
        res.status(200).json({
          message: "Success Get Data Covid",
          data: resCovid.data[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getShdToday: (req, res) => {
    let today = `${new Date().getFullYear()}-0${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
    console.log(new Date().getDate());
    console.log(new Date().getMonth());
    if (new Date().getDate() < 10 && new Date().getMonth() < 10) {
      today = `${new Date().getFullYear()}-0${
        new Date().getMonth() + 1
      }-0${new Date().getDate()}`;
    }
    console.log(today);
    console.log("========SHD========");

    shdData
      .find({ date: today })
      .then((result) => {
        res.status(200).json({
          message: "Success To Get SHD",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error To Get SHD",
          err: err.message,
        });
      });
  },
  getShdTodayShift: (req, res) => {
    let today = `${new Date().getFullYear()}-0${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
    console.log(new Date().getDate());
    console.log(new Date().getMonth());
    if (new Date().getDate() < 10 && new Date().getMonth() < 10) {
      today = `${new Date().getFullYear()}-0${
        new Date().getMonth() + 1
      }-0${new Date().getDate()}`;
    }
    console.log(today);
    console.log("========SHDTODAY========");

    let shift = req.params.shift;
    console.log(shift);

    shdData
      .find({ date: today, shift })
      .then((result) => {
        res.status(200).json({
          message: "Success To Get SHD",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error To Get SHD",
          err: err.message,
        });
      });
  },
  getShdTodayShiftOK: (req, res) => {
    let today = `${new Date().getFullYear()}-0${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
    console.log(new Date().getDate());
    console.log(new Date().getMonth());
    if (new Date().getDate() < 10 && new Date().getMonth() < 10) {
      today = `${new Date().getFullYear()}-0${
        new Date().getMonth() + 1
      }-0${new Date().getDate()}`;
    }
    console.log(today);
    console.log("========SHDOK========");

    let shift = req.params.shift;
    console.log(shift);

    shdData
      .find({ date: today, shift, status: "OK" })
      .then((result) => {
        res.status(200).json({
          message: "Success To Get SHD",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error To Get SHD",
          err: err.message,
        });
      });
  },
  filteredDateShd: (req, res) => {
    let currentDate = req.params.date;

    shdData
      .find({ date: currentDate })
      .then((result) => {
        res.status(200).json({
          message: "Success To Get SHD",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error To Get SHD",
          err: err.message,
        });
      });
  },
};
