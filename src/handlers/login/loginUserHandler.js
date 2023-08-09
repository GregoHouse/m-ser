const { loginUserControllers } = require("../../controllers/login");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUserControllers(email, password);

    if (token) {
      return res.status(200).json(token);
    }

    res.status(401).json({ message: "The password is not valid" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
