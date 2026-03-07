const User = require("../models/user");
const bcrypt = require("bcryptjs");
const generatetoken = require("../utils/generateToken");

const registerUser = async (data) => {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    throw new Error("All feilds are required");
  }

  const existingUser = await User.findOne({ email }).select("-password");

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};

const loginUser = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    throw new Error("All feilds are required");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invadid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invadid credentials");
  }

  const token = generatetoken(user._id);

  return { user, token };
};

module.exports = { registerUser, loginUser };
