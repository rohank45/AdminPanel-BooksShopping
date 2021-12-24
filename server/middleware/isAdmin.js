const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(401)
      .json({ message: "You are not allowed to access for this resource!" });
  }

  next();
};

module.exports = isAdmin;
