const Flight = require('../models/flight')
const Ticket = require('../models/ticket');

// New
function newTicket(req, res) {
    console.log('the new ticket route is hit')
    res.render('tickets/new', { title: 'Add Ticket' })
}

// I don't know why req.params is undefined...
function create(req, res) {
    console.log('the ticket create route is hit')
    console.log('this is req.params', req.params.id)
    // Flight.findById(req.params.id)
    //     .then(flightDoc => {
    //         flightDoc.tickets.push(req.body)
    //         return flightDoc.save()
    //     })
    //     .then(flight => {
    //         res.redirect(`/flights/${flight._id}`)
    //     })
    //     .catch(err => {
    //         console.log('===err===')
    //         console.log(err)
    //         console.log('===err===')
    //         // only in production for developer for now
    //         return res.send('err creating - check terminal')
    //     })

}

module.exports = {
    new: newTicket,
    create
}