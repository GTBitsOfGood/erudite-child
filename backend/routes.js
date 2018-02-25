const express = require('express');
const router = express.Router();

const sponsors = require('./sponsors');

// YOUR API ROUTES HERE
router.use('/', (req, res) => {
  res.json({success: true});
});
// SAMPLE ROUTE
// router.use('/users', (req, res) => {
//     res.json({ success: true });
// });

module.exports = router;
