const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ltbSchema = new Schema(
  {
    date: { type: Date, required: true },
    line: { type: String, required: true },
    machine: { type: String, required: true },
    problemDesc: { type: String, required: true },
    analysis: { type: String, required: true },
    rootcause: { type: String, required: true },
    duration: { type: Number, required: true },
    countermeasure: { type: String, required: true },
    pic: { type: String, required: true },
    status: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const LTBData = mongoose.model("LTBData", ltbSchema);

module.exports = LTBData;
