const wfhData = require("../models/modelInputWfh");

module.exports = {
  createWfh: (req, res) => {
    let newWfhJob = {
      date: req.body.date,
      nama: req.body.nama,
      itemPekerjaan: req.body.itemPekerjaan,
      status: req.body.status,
      keterangan: req.body.keterangan,
      indexDate:`${new Date().getDate()}-${new Date().getMonth()}`,
    };
    wfhData.create(newWfhJob)
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
  getWfhs: (req, res) => {
    if(req.params.date) {
      wfhData.find({})
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
    } else {
      console.log(`${new Date()}`);
      wfhData.find({indexDate: `${new Date().getDate()}-${new Date().getMonth()}`})
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
  },
  editWfh:async (req, res) => {
    let id = {
      _id: req.params.id
    }
    let doc = await wfhData.findOne(id)
    doc.nama = req.body.nama
    doc.itemPekerjaan = req.body.itemPekerjaan
    doc.status = req.body.status
    doc.keterangan = req.body.keterangan
    console.log(doc);
    
    await doc.save()
    res.status(201).json({
      message: "edited"
    });
  },
  deleteWfh: (req, res) => {
    let id = {
      _id: req.params.id
    }
    wfhData.remove(id)
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
