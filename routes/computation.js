const express = require('express');
const router = express.Router();

let ratio = 0.75;
let acc = 1000;

// /users endpoint
router.get('/', function(req, res, next) {
  acc *= ratio;
  res.send(`Value is: ${acc}`);
});

// /computation endpoint
router.get('/computation', function(req, res) {
  // Check if query param x is passed, else generate random x
  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10;

  // Based on your SID ending in 7 → Use Math.cos()
  let fn = 'Math.cos';
  let y = Math.cos(x);

  res.send(`${fn} applied to ${x} is ${y}`);
});

module.exports = router;

