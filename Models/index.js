//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//database name is discover

const sequelize = new Sequelize('postgres://tylegnry:vZbAzgCpWgePWKPOGBb9Xd4GaJReL7_A@babar.db.elephantsql.com/tylegnry', {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)
db.notes = require('./noteModel') (sequelize, DataTypes)
db.saved_notes = require('./savedNoteModel') (sequelize, DataTypes)

db.notes.hasOne(db.saved_notes)
db.users.hasOne(db.saved_notes)

//exporting the module
module.exports = db