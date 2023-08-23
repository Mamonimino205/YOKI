const mongoose = require("mongoose");

const chatTopicSchema = new mongoose.Schema(
  {
    senderUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receiverUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", default: null },
    expiration_date: { type: Date, required: true, expires: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("ChatTopic", chatTopicSchema);
