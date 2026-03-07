const { registerUser, loginUser } = require("../services/authService");
exports.registerUser = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({ message: "User registered successfully ", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const data = await loginUser(req.body);
    res.status(200).json({ message: "Login successfully ", token: data.token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
