const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/events")

const db = mongoose.connection

db.on('error', (err) => {
    console.log("Failed Connection")
})
db.once('open', () => {
    console.log("Connected")
})