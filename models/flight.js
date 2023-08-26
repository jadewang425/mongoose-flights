const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {
        tyoe: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
})

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    // still need to update -> one year from date created
    // formatted with time as well
    departs: {
        type: Date,
        default: () => new Date().setFullYear(new Date().getFullYear() + 1)
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
})

// export
module.exports = mongoose.model('Flight', flightSchema)