require('dotenv').config()
const express = require('express')
const app = express()
const [
  homeController, showsController, aboutMeController
] = [
  require('./controllers/homeController'), require('./controllers/showsController'), require('./controllers/aboutMeController')
]

app.set('view engine', 'ejs')
app.use(express.json())
// app.use(express.urlencoded()) // deprecated


app.get('/', async (req, res) => {
  res.redirect('/home')
})
app.get('/home', homeController.index)

app.get('/shows', showsController.getShows)

app.post("/shows", showsController.updateShows)

app.get('/shows/:id', showsController.getShow)

app.post("/shows/:id", showsController.updateShow)

app.get('/about', aboutMeController.linktree)

app.use('/public', express.static(__dirname + '/public'))
app.use('/node', express.static(__dirname + '/node_modules/@themesberg/flowbite/dist/'))

app.listen(process.env.PORT_LISTENER)