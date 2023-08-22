const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flightsControl');

// all paths start with "/flights"
// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
// show
// create
// delete

module.exports = router;