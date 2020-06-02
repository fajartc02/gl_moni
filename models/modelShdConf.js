const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shdModel = new Schema(
  {
    date: { type: String, required: true },
    name: { type: String, required: true },
    shift: { type: String, required: true },
    status: {type: String, required: true},
  },
  {
    timestamps: true
  }
);

const shdData = mongoose.model("shdData", shdModel);

module.exports = shdData;
