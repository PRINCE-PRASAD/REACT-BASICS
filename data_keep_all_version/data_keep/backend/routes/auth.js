
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');



// create a user using: post "/api/auth/" doesn't require auth
// ---------------------------------------------------------------------------
// all this code is from express validator docomentation

router.post('/',[
  body('name', 'Enter a vaild Name').isLength({min: 3}),
  body('email', 'Enter a vaild email').isEmail(),
  body('password', 'Enter a vaild password').isLength({min: 5}),
], (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then(user => res.json(user))
      
// ------------------------------------------------------------------------------------------------
   // this help in show the messege of err in the console of resonse 
     .catch (err=> {console.log(err)
      res.json({error: 'please enter a unique email', message: err.message})})
      //"message: err.message" this is optional u can also remove this it shows system err message
// -----------------------------------------------------------------------------------------
  } )

   module.exports = router

