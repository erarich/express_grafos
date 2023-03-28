//importing modules
const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./Models')
const userRoutes = require ('./Routes/userRoutes') 
const noteRoutes = require ('./Routes/noteRoutes')

//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync().then(() => {
    console.log("db has been re sync")
})

app.get("/", (req, res) => {
  res.send("Express on Vercel");
})

//routes for the user API
app.use('/api/users', userRoutes)

//routes for the note API
app.use('/api/notes', noteRoutes)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))