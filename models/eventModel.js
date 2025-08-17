const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    date: {
        type: String, required: true,
        validate: [
            {
                validator: function (value) {
                    return /^\d{4}-\d{2}-\d{2}$/.test(value);
                },
                message: 'Date must be in format YYYY-MM-DD'
            },
            {
                validator: function (value) {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const inputDate = new Date(value);
                    return inputDate >= today;
                },
                message: 'Event date cannot be in the past'
            }
        ]
    },
    description: {
        type: String, required: true
    }
});

module.exports = mongoose.model('Event', eventSchema)
