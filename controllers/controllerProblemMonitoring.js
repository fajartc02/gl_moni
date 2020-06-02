const problemData = require('../models/modelProblemMonitoring');

module.exports = {
    createProblem: (req, res) => {
        let today = new Date()
        let dateFormat = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()
        let newProblem = {
            date: dateFormat,
            name: req.body.name,
            line: req.body.line,
            machine: req.body.machine,
            problem: req.body.problem,
            startRepair: new Date(),
            startRepairTime: new Date().getTime(),
            finishRepair: null,
            finishRepairTime: null,
            status: "NG"
        }
        problemData.create(newProblem)
        .then(result => {
            res.status(201).json({
                message: 'Success To Create Problem Input',
                // data: result.data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error To Create Problem Input',
                err: err.message
            })
        })
    },
    getProblemsData: (req, res) => {
        console.log(req.params.line);
        if(req.params.line != 'All') {
            problemData.find({line: req.params.line, status: "NG"})
            .then(result => {
                res.status(200).json({
                    message: 'Success To Get Problems',
                    data: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Error To Get Problem',
                    err: err.message
                })
            })
        } else {
            problemData.find({status: "NG"})
            .then(result => {
                res.status(200).json({
                    message: 'Success To Get Problems',
                    data: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Error To Get Problem',
                    err: err.message
                })
            })
        }
        
    },
    finishProblem: async (req, res) => {
        let id = {
            _id: req.params.id
          }
          let doc = await problemData.findOne(id)
          doc.finishRepair = new Date()
          doc.finishRepairTime = new Date().getTime()
          doc.status = "OK"
          console.log(doc);
          
          await doc.save()
          res.status(201).json({
            message: "edited"
          });
    },
    editProblem: (req, res) => {

    },
    removeProblem: (req, res) => {

    }
}