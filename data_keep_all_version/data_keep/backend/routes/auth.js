
const express = require('express');
const User = require('../models/User');
const router = express.Router();
// const { body, validationResult } = require('express-validator');



// create a user using: post "/api/auth/" doesn't require auth

// router.post('/',[
//   body('name', 'Enter a vaild Name').isLength({min: 3}),
//   body('email', 'Enter a vaild email').isEmail(),
//   body('password', 'Enter a vaild password').isLenght({min: 5}),
// ], (req, res)=>{
//   const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
 
router.post('/', (req, res)=>{ 
  console.log(req.body);
  const user = User(req.body);
  user.save()
  res.send(req.body);
} )



// router.post('/', async (req, res) => {
//   const { name , email, password } = req.body;
//   const user = new User({
//   name, email, password });
//   await user.save();
//   res.send(req.body);
//   })
   module.exports = router

// {
//   "name": "hearry",
//   "email": "happy@gmail.com",
//   "password": "787874@5Ai"
// }