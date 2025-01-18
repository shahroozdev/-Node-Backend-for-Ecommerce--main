const User = require("../models/User");
const jwt = require("jsonwebtoken");

const protectRoute = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    const token = authHeader?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token found." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized: Invalid token." });
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({
        error: `Some error occurs on server. Try again. ${error.message}`,
      });
  }
};

module.exports = { protectRoute };