const express = require("express");
const User = require("../models/User");

const router = express.Router();

// API to store user data
router.post("/submit", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "Data stored successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;
