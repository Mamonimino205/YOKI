const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    fromUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    toUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: String,
    date: { type: String, default: new Date().toLocaleString() },
    expiration_date: { type: Date, required: true, expires: 0 },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Report", reportSchema);
