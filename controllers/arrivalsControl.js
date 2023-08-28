const Flight = require('../models/flight')

// create
function create(req, res) {
    // find the flight
    console.log('create arrival for Flight', Flight)
    console.log('this is create function in arrivalsControl', req.params)
    Flight.findById(req.params.id)
        .then(flightDoc => {
            // push the arrival info
            flightDoc.destinations.push(req.body)
            // save the flight with arrival info
            return flightDoc.save()
         })
         .then(flight => {
            res.redirect(`/flights/${flight._id}`)
         })
         .catch(err => {
            console.log('===err===')
            console.log(err)
            console.log('===err===')
            return res.send('err creating - check terminal')
        })
}

module.exports = {
    create,
}