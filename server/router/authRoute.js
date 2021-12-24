const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../model/adminSchema");

router.post("/buybooks/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: "All fields are required" });
    }

    const adminEmail = await Admin.findOne({ email: email });
    if (!adminEmail) {
      return res.status(401).json({ message: "Invalid Admin" });
    }

    const checkPassword = await bcrypt.compare(password, adminEmail.password);
    if (!checkPassword) {
      return res.status(401).json({ message: "Invalid Admin" });
    }

    const token = jwt.sign({ email }, process.env.SECRET_KEY);
    res.cookie("adminToken", token, {
      expires: new Date(Date.now() + 2592000000),
    });

    res.status(201).json({ message: "Admin Login Success!" });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/buybooks/admin/logout", async (req, res) => {
  try {
    res.clearCookie("adminToken");
    res.status(201).json({ message: "Logout Success!" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
