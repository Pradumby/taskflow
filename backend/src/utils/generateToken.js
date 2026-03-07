const jwt = require("jsonwebtoken");

const generatetoken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = generatetoken;
