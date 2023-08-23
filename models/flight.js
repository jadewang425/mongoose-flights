const mongoose = require('mongoose')

const Schema = mongoose.Schema

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
    departs: Date,
}, {
    timestamps: true
})

// export
module.exports = mongoose.model('Flight', flightSchema)