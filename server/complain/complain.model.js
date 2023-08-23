const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complainSchema = new Schema(
  {
    message: String,
    contact: String,
    image: { type: String, default: null },
    solved: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    expiration_date: { type: Date, required: true, expires: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Complain", complainSchema);
