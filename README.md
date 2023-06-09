# express_grafos

Criação de uma API com Express, NodeJS e PostgreSQL para trabalho realizado para a disciplina de Engenharia de Software, na Universidade Federal do Tocantins, cujo os requisitos são utilizar a arquitetura MVC e possibilidade de interação com o usuário final, além do requisito principal que é o de utilizar GitFlow.

- Bibliotecas instaladas:
`npm install pg`

`npm install --save sequelize`

`npm install --save pg-hstore`

`npm i nodemon`

`npm install bcrypt`

`npm install dotenv`

`npm install jsonwebtoken`

`npm install cookie-parser`

Para funcionar, na pasta Models deve ser criado um arquivo: index.js, que contém dados do banco de dados, isto é, dados sensíveis, logo, não foi incluído para o repositório.

index.js:

//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//database name is discover
const sequelize = new Sequelize(`localhost/databasename`, {dialect: "postgres"})

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

//exporting the module
module.exports = db

nova feature