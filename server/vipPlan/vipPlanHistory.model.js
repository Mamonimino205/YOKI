const mongoose = require("mongoose");

const VIPPlanHistorySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    planId: { type: mongoose.Schema.Types.ObjectId, ref: "VIPPlan" },
    paymentGateway: String,
    date: String,
    expiration_date: { type: Date, required: true, expires: 0 },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("VIPPlanHistory", VIPPlanHistorySchema);
