const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accidentSchema = new Schema(
  {
    date: { type: String, required: true },
    problemDesc: { type: String, required: true },
    location: { type: String, required: true },
    rootcause: { type: String, required: true },
    pic: { type: String, required: true },
    countermeasure: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const AccidentData = mongoose.model("AccidentData", accidentSchema);

module.exports = AccidentData;
