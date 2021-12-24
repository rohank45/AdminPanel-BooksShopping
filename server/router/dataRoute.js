const express = require("express");
const router = express.Router();

const isAdmin = require("../middleware/isAdmin");
const isUserLogin = require("../middleware/isAdminLogin");

const mongoose = require("mongoose");
const schema = mongoose.Schema();
const User = mongoose.model("googleusers", schema);

router.get("/buybooks/users", isUserLogin, isAdmin, async (req, res) => {
  try {
    const data = await User.find();

    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  }
});

router.post(
  "/buybooks/user/details",
  isUserLogin,
  isAdmin,
  async (req, res) => {
    try {
      const userDetails = await User.findById(req.body.id);

      res.status(201).send(userDetails);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
