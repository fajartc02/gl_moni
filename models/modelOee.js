const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const oeeMonitor = new Schema(
  {
    date: { type: String, required: true },
    line: { type: String, required: true },
    oee: { type: String, required: true },
    time: {type: String, required: true},
  },
  {
    timestamps: true
  }
);

const oeeData = mongoose.model("oeeData", oeeMonitor);

module.exports = oeeData;
