const mongoose = require("mongoose");

// Schema for collection
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  balance: { type: Number, default: 0 },
  interestRate: { type: Number, default: 5 }, // 5% interest rate
  lastUpdated: { type: Date, default: Date.now },
});

// Model for schema
const User = mongoose.model("User", userSchema);

module.exports = User;
