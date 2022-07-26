const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class User {
  constructor() {
    // super();
  }
  async Signup(req, res) {
    try {
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      //saved user to database
      const newuser = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      });
      //added user to database
      const user = await newuser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }
}

export default new User();

//user signup with email and password(hash)
exports.Signup = async (req, res) => {
  try {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //saved user to database
    const newuser = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });
    //added user to database
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

//user login with email and password(hash) and return token

exports.Login = async (req, res) => {
  try {
    //find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //compare password
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Password is incorrect" });
    }
    //create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //saved token to database
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, token });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

exports.GetallUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
