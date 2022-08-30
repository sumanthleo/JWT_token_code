const User = require("../model/UserModel");

class UserController {
  async createUser(req, res) {
    try {
      const newUser = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        role: req.body.role,
        is_active: req.body.is_active,
        is_deleted: req.body.is_deleted,
      });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(200).json(error);
    }
  }
}

module.exports = new UserController();
