const Flight = require('../models/flight')

// NEW
function newFlight(req, res) {
    console.log('the new route is hit')
    res.render('flights/new', { title: 'Add Flight', errorMsg: ''})
}
// CREATE
function create(req, res) {
    console.log('this is the create function')
    Flight.create(req.body)
        .then(flightDoc => {
            console.log(flightDoc)
            res.redirect('/flights')
        })
        .catch(err => {
            console.log('===err===')
            console.log(err)
            console.log('===err===')
            // only in production for developer for now
            res.redirect('/flights')
        })
    res.send
}
// INDEX
function index(req, res) {
    Flight.find({})
    .then(flightDocs => {
        console.log('show all these flights\n', flightDocs)
        res.render('flights/index', { flights: flightDocs, title: 'All Flights'})
    })
    .catch(err => {
        console.log('===err===')
        console.log(err)
        console.log('===err===')
        return res.send('err creating - check terminal')
    })
}
// SHOW
async function show(req, res) {
    // console.log('shpw page req', req.params.id)
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', {title: 'Flight Details', flight})
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