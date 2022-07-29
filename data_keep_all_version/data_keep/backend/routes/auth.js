const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "Princeisagood%boy";

//   ROUTS 1: create a user using: post "/api/auth/createuser" doesn't require auth

router.post(
  "/createuser",
  [
    body("name", "Enter a vaild Name").isLength({ min: 3 }),
    body("email", "Enter a vaild email").isEmail(),
    body("password", "Enter a vaild password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there is an error , return the bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check wheather the user wih this email exist or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user alredy exist with this email" });
      }
      // for adding salt(bcrypt)/hashing for saftey in password in database
      const salt = await bcrypt.genSalt(10);
      //for password adding with hash
      const secPass = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      // --------------------------------------------------------
      // for authentication using token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      //  -------------------------------------------------
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some Error Ocurred");
    }
  }
);
// ---------------------------------------------------------------------------------------------------------------
// ROUTS :2  for log in  with secure password
router.post(
  "/login",
  [
    body("email", "Enter a vaild email").isEmail(),
    body("password", "Password can not be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ Error: "Plese try with right credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ Error: "Plese try with right credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Error Ocurred");
    }
  }
);
// --------------------------------------------------------------------------------------------------------------
// routs 3 to get login  User detail using Post"/api/auth/getuser" . login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error Ocurred1");
  }
});
module.exports = router;
