const mongoose = require('mongoose');

const RSVPSchema = new mongoose.Schema({
    response: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    starter: {
        type: String
    },
    main: {
        type: String
    },
    dessert: {
        type: String
    },
    song: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RSVP', RSVPSchema);
