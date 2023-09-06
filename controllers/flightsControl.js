const Flight = require('../models/flight')

// NEW
function newFlight(req, res) {
    // console.log('the new route is hit')
    res.render('flights/new', { title: 'Add Flight', errorMsg: ''})
}
// CREATE
function create(req, res) {
    // console.log('this is the flight create function')
    Flight.create(req.body)
        .then(flightDoc => {
            console.log(flightDoc)
            res.redirect('/flights')
        })
        .catch(error => console.error)
    res.send
}
// INDEX
function index(req, res) {
    Flight.find({}).sort('departs')
    .then(flightDocs => {
        console.log('show all these flights\n', flightDocs)
        res.render('flights/index', { flights: flightDocs, title: 'All Flights'})
    })
    .catch(error => console.error)
}
// SHOW
async function show(req, res) {
    // console.log('shpw page req', req.params.id)
    Flight.findById(req.params.id)
        .populate('tickets')
        .then(flight => {
            console.log('this is the flight in show', flight.tickets[0])
            res.render('flights/show', {title: 'Flight Details', flight})

        })
}
// EDIT
// UPDATE
// DELETE


// export
module.exports = {
    new: newFlight,
    create,
    index,
    show
}