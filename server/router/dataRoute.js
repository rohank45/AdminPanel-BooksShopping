const express = require("express");
const router = express.Router();

const isAdmin = require("../middleware/isAdmin");
const isUserLogin = require("../middleware/isAdminLogin");

const mongoose = require("mongoose");
const schema = mongoose.Schema();
const User = mongoose.model("googleusers", schema);

var db = require("../config/newDatabse");
const ObjectId = require("bson-objectid");

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

router.post("/update/order/data", isUserLogin, isAdmin, async (req, res) => {
  try {
    const { email, id, paymentToken, orderStatus } = req.body;

    // const user = await User.findOne({ email });
    // console.log("user", user); //here im getting user data
    // console.log(user.name); //but then why user.name getting undefined

    // console.log(id);  //getting 61c5abac0121e2b816cacd2d
    // console.log(ObjectId(id)); //getting 61c5abac0121e2b816cacd2d
    // console.log("is id valid", mongoose.Types.ObjectId.isValid(id));  //getting true

    // const order = await User.findOne({ _id: id }); // null
    const order = await User.findOne({ id }); // user data
    console.log("order object", order);

    // const order = await User.findOne({ id: ObjectId(id) }); //getting user data
    // console.log(order.orderStatus); //but here getting null

    //using mongoose
    // await User.findOneAndUpdate(
    //   { id: ObjectId(id) },
    //   { orderStatus: "orderStatus" },
    //   { new: true }
    // );
    // console.log("data changed");

    //using mongodb
    // await db.collection("googleusers").update({ id }, { $set: { orderStatus: "orderStatus" } }, { new: true });

    // res.status(201).send("Order Updated!");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// how to find by id in mongoose _id which is in array of objects
// mongoose query: find an object by id in an array
// https://stackoverflow.com/questions/40596865/mongoose-query-find-an-object-by-id-in-an-array
