const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

// create a user using: post "/api/auth/createuser" doesn't require auth

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

      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some Error Ocurred");
    }
  }
);

module.exports = router;
