const User = require("../models/modelUser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  signup: (req, res) => {
    let newUser = {
      name: req.body.name,
      email: req.body.email,
      noreg: req.body.noreg,
      role: "user",
      password: req.body.password
    };
    User.create(newUser)
      .then(user => {
        res.status(201).json({
          message: "Success",
          data: user
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "fail",
          err: err.message
        });
      });
  },

  signin: (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          let password = bcrypt.compareSync(req.body.password, user.password);
          if (password) {
            let token = jwt.sign(
              { id: user._id, name: user.name, email: user.email },
              process.env.JWT_KEY
            );
            res.status(201).json({
              message: "Success",
              data: user,
              token: token
            });
          } else {
            res.status(401).json({
              message: "your email or password wrong"
            });
          }
        } else {
          res.status(401).json({
            message: "your email or password wrong"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "failed",
          err: err.message
        });
      });
  }
};
