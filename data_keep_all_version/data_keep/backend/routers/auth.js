
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
   obj = { a: 'hureeeu!',
    number: 45
}
  res.json(obj)
})

module.exports = router