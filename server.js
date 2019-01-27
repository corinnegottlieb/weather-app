const express = require(`express`)
const api = require(`./server/routes/api`)
const bodyParser = require(`body-parser`)
const path = require(`path`)
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const mongoose = require(`mongoose`)
mongoose.connect(`mongodb://localhost/weatherDB`, {useNewUrlParser: true})

app.use(`/`, api)

const port = 7000
app.listen(port, function(){
    console.log(`Running on port ${port}`)
})