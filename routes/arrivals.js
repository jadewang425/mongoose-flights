const express = require('express')
const router = express.Router()

// bring arrival controllers
const arrivalsCtrl = require('../controllers/arrivalsControl')

// new
router.post('/flights/:id/arrivals', arrivalsCtrl.create)


module.exports = router;