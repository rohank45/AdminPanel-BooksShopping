const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }

  next();
});

adminSchema.methods.generateToken = async function () {
  return jwt.sign({ id: this._id }, process.env.SECRET_KEY);
};

module.exports = mongoose.model("admin", adminSchema);
