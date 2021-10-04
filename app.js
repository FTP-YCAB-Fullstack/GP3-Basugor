require('dotenv').config()

const express = require("express");
const Router = require("./router");
const port = 4000;

const errorHandler = require('./middlewares/handleError')

const {sequelize} = require('./models')

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(Router);

app.use(errorHandler)
app.listen(port, async () => {
    console.log('Server running at port ', port)
    await sequelize.authenticate()
    console.log('Connect to DB')
});
