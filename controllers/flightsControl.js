const Flight = require('../models/flight')

// index
function index(req, res) {
    Flight.find({})
    .then(flightDocs => {
        console.log('found all these movies\n', movieDocs)
        res.render('flights/index', { flights: flightDocs})
    })
    .catch(err => {
        console.log('===err===')
        console.log(err)
        console.log('===err===')
        return res.send('err creating - check terminal')
    })
}

module.exports = {
    index
}