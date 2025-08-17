const express = require('express')
const bodyParser = require('body-parser')
const eventRoutes = require('./routes/eventRoutes')
require('./utils/DB')

const PORT = 3000
const app = express()
app.use(bodyParser.json())

app.use('/events', eventRoutes)


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
});
