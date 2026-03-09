const { registerUser, loginUser } = require("../services/authService");
const asyncHandler = require("../utils/asyncHandler");

exports.registerUser = asyncHandler(async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({ message: "User registered successfully ", user });
});

exports.loginUser = asyncHandler(async (req, res) => {
  const data = await loginUser(req.body);
  res.status(200).json({ message: "Login successfully ", token: data.token });
});
