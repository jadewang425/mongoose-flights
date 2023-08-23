const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/flights');
});

// export
module.exports = router;