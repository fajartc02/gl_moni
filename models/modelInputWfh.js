const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wfhSchema = new Schema(
  {
    date: { type: Date, required: true },
    nama: { type: String, required: true },
    itemPekerjaan: { type: String, required: true },
    status: { type: String },
    keterangan: { type: String },
    indexDate: {type: String}
  },
  {
    timestamps: true
  }
);

const wfhData = mongoose.model("wfhData", wfhSchema);

module.exports = wfhData;
