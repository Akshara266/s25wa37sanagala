const express = require('express');
const router = express.Router();

// Initialize ratio and acc
let ratio = 0.75;
let acc = 1000;

// GET /users route
router.get('/', function(req, res, next) {
  acc *= ratio;  // Multiply acc by ratio
  res.send(`Value is: ${acc}`);  // Send response with updated acc
});

module.exports = router;

