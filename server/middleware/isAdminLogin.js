const jwt = require("jsonwebtoken");
const Admin = require("../model/adminSchema");

const isAdminLogin = async (req, res, next) => {
  const token = req.cookies.adminToken;

  if (!token) {
    return res.status(401).json({ message: "Login first to access this page" });
  }

  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  req.user = await Admin.findOne({ email: decoded.email });

  next();
};

module.exports = isAdminLogin;
