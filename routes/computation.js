const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  // Use query param if available, otherwise generate a random number
  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;

  // SID ends in 7 → using Math.cos()
  const fn = 'Math.cos';
  const y = Math.cos(x);

  // Send response in required format
  res.send(`${fn} applied to ${x} is ${y}`);
});

module.exports = router;
