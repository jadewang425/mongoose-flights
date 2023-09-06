const Flight = require('../models/flight')
const Ticket = require('../models/ticket');

// New
function newTicket(req, res) {
    console.log('the new ticket route is hit')
    // console.log('the new ticket req.params.flightId', req.params.flightId)
    Flight.findById(req.params.flightId)
    .then(flight => {
        res.render('tickets/new', { title: 'Add A Ticket', flight })

    })
    .catch(error => console.error)
}

// hitting this function but id undefine...
function create(req, res) {
    console.log('the ticket create route is hit')
    // console.log('this is req.params', req.params.flightId)
    Flight.findById(req.params.flightId)
        .then(flight => {
            console.log(flight)
            req.body.flight = flight.id
            Ticket.create(req.body)
            .then(ticket => {
                flight.tickets.push(ticket)
                return flight.save()
            })
            .then(ticket => {
                res.redirect(`/flights/${flight._id}`)
            })
        })
        .catch(error => console.error)

}

module.exports = {
    new: newTicket,
    create
}