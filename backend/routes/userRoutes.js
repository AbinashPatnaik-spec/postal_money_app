const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create or Update
router.post("/deposit", async (req, res) => {
  const { username, depositAmount } = req.body;
  let user = await User.findOne({ username });
  if (!user) {
    user = new User({ username, balance: depositAmount });
  } else {
    user.balance += depositAmount;
  }
  user.lastUpdated = Date.now();
  await user.save();
  res.json({ message: "Deposited successfully", balance: user.balance });
});

// Get user balance with interest
router.get("/balance/:username", async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ messgae: "User not found" });
  }

  // Calculate balance with interest
  const monthsSinceLastUpdate = Math.floor(
    (Date.now() - new Date(user.lastUpdated)) / (1000 * 60 * 60 * 24 * 30)
  );
  const interest =
    user.balance * (user.interestRate / 100) * monthsSinceLastUpdate;
  const balanceWithInterest = user.balance + interest;
  res.json({ balance: balanceWithInterest });
});

module.exports = router;
