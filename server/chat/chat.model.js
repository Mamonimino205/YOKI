const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    senderId: String,
    messageType: String,
    message: String,
    image: String,
    topic: { type: mongoose.Schema.Types.ObjectId, ref: "ChatTopic" },
    date: String,
    expiration_date: { type: Date, required: true, expires: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Chat", chatSchema);
