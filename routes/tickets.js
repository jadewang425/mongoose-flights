const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/ticketsControl');

// all paths start with "/flights"
// NEW 'flights/:id/tickets'
router.get('/new', ticketsCtrl.new)
// CREATE
router.post('/', ticketsCtrl.create);


module.exports = router;