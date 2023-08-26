const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flightsControl');

// all paths start with "/flights"
// NEW 'flights/new
router.get('/new', flightsCtrl.new)
// CREATE
router.post('/', flightsCtrl.create);
// INDEX
router.get('/', flightsCtrl.index);
// SHOW
router.get('/:id', flightsCtrl.show);
// EDIT
// UPDATE
// DELETE

module.exports = router;