require("dotenv").config()
const express = require("express")
const cors = require("cors")
const database = require("./config/database")

const app = express()
const orgRouters = require('./routers/orgRoutes');

app.use(express.json())
app.use(cors())

app.use("/organizacao", orgRouters);

database.connect()

module.exports = app;