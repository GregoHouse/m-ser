const { createUserAdminControllers } = require("../../../controllers/user");

module.exports = async (req, res) => {
  try {
    const data = await createUserAdminControllers(req);
    const response = { error: false, data };
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
