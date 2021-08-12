// For the Environment Variables
require('dotenv').config()

// Importing Packages Here
const express = require('express')();
const app = express()
const connectDB = require('./config/db')


// Importing Router Here
const greenPointRoutes = require('./routes/greenPointRoutes');


// RUNNER PORT 
const PORT = process.env.PORT || 9000;


app.use(express.json())


// Testing Server
app.get("/", (req, res) => {
	res.status(200).json({ message: "Hello World!" });
});


// Init Routes Here
app.use('/api', greenPointRoutes)



//Connecting to the Database Here
connectDB();
// ===================


// Booting App Here
app.listen(PORT, () => {
    console.log(`🚀 Server ready at PORT:${PORT}`)
})