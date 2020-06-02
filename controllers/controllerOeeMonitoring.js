const oeeData = require('../models/modelOee');

module.exports = {
    createOee: (req, res) => {
        let today = new Date()
        let dateFormat = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()
        let newOee = {
            date: dateFormat,
            name: req.body.name,
            line: req.body.line,
            oee: req.body.oee,
            time: req.body.time,
        }
        oeeData.create(newOee)
        .then(result => {
            res.status(201).json({
                message: 'Success To Create Oee Input',
                // data: result.data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error To Create Oee Input',
                err: err.message
            })
        })
    },
    getOee: (req, res) => {
        let today = new Date()
        let dateFormat = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()

        console.log(typeof req.params.line);
        if(req.params.line == 'ALL') {
            oeeData.find({date: dateFormat})
            .then(result => {
                res.status(200).json({
                    message: 'Success To Get Oee',
                    data: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Error To Get Oee',
                    err: err.message
                })
            })
        } else {
            oeeData.find({line: req.params.line, date: dateFormat})
            .then(result => {
                res.status(200).json({
                    message: 'Success To Get Oee',
                    data: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Error To Get Oee',
                    err: err.message
                })
            })
        }
        
    },
    finishOee: async (req, res) => {
        let id = {
            _id: req.params.id
          }
          let doc = await oeeData.findOne(id)
          doc.finishRepair = new Date()
          doc.finishRepairTime = new Date().getTime()
          doc.status = "OK"
          console.log(doc);
          
          await doc.save()
          res.status(201).json({
            message: "edited"
          });
    },
    editOee: (req, res) => {

    },
    removeOee: (req, res) => {

    }
}