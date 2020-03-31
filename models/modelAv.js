const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const achievementAvSchema = new Schema(
  {
    date: { type: Date, required: true },
    line: { type: String, required: true },
    machine: { type: String, required: true },
    avAchievement: { type: Number, required: true },
    status: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const AvData = mongoose.model("AvData", achievementAvSchema);
module.exports = AvData;
