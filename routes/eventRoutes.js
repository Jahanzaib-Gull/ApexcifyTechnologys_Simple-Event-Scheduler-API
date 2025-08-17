const express = require('express')
const router = express.Router()
const eventController = require('../controllers/eventControllers')

router.get('/', eventController.listEvents)

router.post('/', eventController.createEvent)

module.exports = router
