const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemsMonitor = new Schema(
  {
    date: { type: String, required: true },
    name: { type: String, required: true },
    line: { type: String, required: true },
    machine: { type: String, required: true },
    problem: {type: String, required: true},
    startRepair: {type: Date},
    startRepairTime: {type: Number},
    finishRepair: {type: Date},
    finishRepairTime: {type: Number},
    status: {type: String}
  },
  {
    timestamps: true
  }
);

const problemData = mongoose.model("problemData", problemsMonitor);

module.exports = problemData;
