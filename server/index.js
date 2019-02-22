const express = require('express')
const ctrl = require('./controller')
const bodyParser = require('body-parser')
const massive = require('massive')

require ('dotenv').config()

const app = express()
app.use(bodyParser.json())

const {CONNECTION_STRING} = process.env


massive(CONNECTION_STRING).then( (dbInstance) => {
  app.set('db', dbInstance)
  console.log('were connected')
})

//Endpoints

app.get('/api/houses', (req, res) => {
  const dbInstance = res.app.get('db')
  dbInstance.getHouses().then((response) => {
    res.send(response)
  })
})

app.post('/api/house', (req, res) => {
  const dbInstance = req.app.get('db')
  const {name, address, city, state, zip} = req.body
  dbInstance.addHouse(name, address, city, state, zip).then(response => {
    res.status(201).send(response)
  })
})

app.delete('/api/house/:id', (req, res) => {
  const dbInstance = req.app.get('db')
  const {id} = req.params
  dbInstance.deleteHouse(id).then((response) => {
    res.status(200).send(response)
  })
})





//ServerPort
const port = 3001
app.listen(port, () => console.log('beginning our descent, blue leader'))