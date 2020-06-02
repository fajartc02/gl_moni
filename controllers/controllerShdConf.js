const shdData = require('../models/modelShdConf');

module.exports = {
    createShd: (req, res) => {
        let newShd = {
            date: req.body.date,
            name: req.body.name,
            shift: req.body.shift,
            status: "OK",
        }
        shdData.findOne({name: {$regex: `${req.body.name}`}, shift: req.body.shift, date: req.body.date})
        .then((result) => {
            console.log(result);
            if(result === null) {
                shdData.create(newShd)
                .then(() => {
                    res.status(201).json({
                        message: 'Success To Create SHD Input',
                        // data: result.data
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Error To Create SHD Input',
                        err: err.message
                    })
                })
            } else {
                res.status(500).json({
                    message: 'Duplicate SHD Input',
                    // err: err.message
                })
            }
        })
        .catch((err) => {
            console.log(err);
            
        })
    },
    getShdFirstDate: (req, res) => {
        shdData.find({date: '2020-06-02'})
        .then(result => {
            res.status(200).json({
                message: 'Success Get Data 02 June 2020',
                data: result
            })
        })
        .catch(err => {
            res.status(5000).json({
                message: 'Error Get Data 02 June 2020',
                err: err.message
            })
        })
    },
    getShdToday: (req, res) => {
       let today = `${new Date().getFullYear()}-0${new Date().getMonth()+1}-0${new Date().getDate()}`
       console.log(today);
       
       shdData.find({date: today})
       .then(result => {
            res.status(200).json({
                message: 'Success To Get SHD',
                data: result
            })
       })
       .catch(err => {
           res.status(500).json({
               message: 'Error To Get SHD',
               err: err.message
           })
       })
    },
    getShdTodayShift: (req, res) => {
        let today = `${new Date().getFullYear()}-0${new Date().getMonth()+1}-0${new Date().getDate()}`
       console.log(today);
       let shift = req.params.shift
       shdData.find({date: today, shift})
       .then(result => {
            res.status(200).json({
                message: 'Success To Get SHD',
                data: result
            })
       })
       .catch(err => {
           res.status(500).json({
               message: 'Error To Get SHD',
               err: err.message
           })
       })
    },
    filteredDateShd: (req, res) => {
        let currentDate = req.params.date

        shdData.find({date: currentDate})
       .then(result => {
            res.status(200).json({
                message: 'Success To Get SHD',
                data: result
            })
       })
       .catch(err => {
           res.status(500).json({
               message: 'Error To Get SHD',
               err: err.message
           })
       })
    }
}