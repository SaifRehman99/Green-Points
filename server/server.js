// For the Environment Variables
require('dotenv').config()

// Importing Packages Here
const express = require('express');
const app = express()
const connectDB = require('./config/db')
const cors = require('cors')

// Importing Router Here
const greenPointRoutes = require('./routes/greenPointRoutes');
const userActivityRoutes = require('./routes/userActivityRoutes');



// RUNNER PORT 
const PORT = process.env.PORT || 9000;


app.use(cors())
app.use(express.json())


// Testing Server
app.get("/", (req, res) => {
	res.status(200).json({ message: "Hello World!" });
});


// Init Routes Here
app.use('/api', greenPointRoutes)
app.use('/api', userActivityRoutes)



//Connecting to the Database Here
connectDB();
// ===================


// Booting App Here
app.listen(PORT, () => {
    console.log(`🚀 Server ready at PORT:${PORT}`)
})