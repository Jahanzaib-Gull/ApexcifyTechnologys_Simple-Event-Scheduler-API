# (Node.js) Simple Event Scheduler API! 🗓️📝
I've created a REST API for event management using Node.js, Express, and MongoDB.

## 🚀 Key Features:
### ✅ Core Functionality:
* Request Handling: The application uses body-parser to handle incoming JSON data, and provides a GET route to list all events and a POST route to create new ones [cite: index.js, eventRoutes.js].
* Data Persistence: Event data is stored in a MongoDB database, with Mongoose managing the connection and schemas [cite: eventModel.js].
* Data Validation: A schema for events includes fields for title, date, and description. I've added validation to ensure the date is correctly formatted as YYYY-MM-DD and is not in the past [cite: eventModel.js].
* Controller Logic: The controllers manage the logic for creating and listing events, including sorting them by date [cite: eventControllers.js].
* Server Setup: The application server runs on port 3000 [cite: index.js].

### 🛠 Tech Stack:
Node.js, Express.js, MongoDB, Mongoose
