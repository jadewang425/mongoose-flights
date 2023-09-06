const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/ticketsControl');

// all paths start with "/tickets"
// NEW 
router.get('/new/:flightId', ticketsCtrl.new)
// CREATE
router.post('/:flightId', ticketsCtrl.create);


module.exports = router;