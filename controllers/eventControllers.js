const Event = require('../models/eventModel')

async function listEvents(req, res) {
    try {
        const events = await Event.find().sort({ date: 1 })
        res.json(events)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

async function createEvent(req, res) {
    try {
        const event = await Event.create(req.body)
        res.status(201).json(event)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    createEvent,
    listEvents,
}