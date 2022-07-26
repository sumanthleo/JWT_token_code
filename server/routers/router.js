const { Signup, Login, GetallUsers } = require("../controller/UserController");

const express = require("express");
const { verifyToken } = require("../verifyTokens/Tokens");
const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Login);
router.get("/getusers", verifyToken, GetallUsers);

module.exports = router;
