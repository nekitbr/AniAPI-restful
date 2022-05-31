const [
  axiosController
] = [ 
  require('./axiosController')
]

async function index(req, res) {
  const airing = await axiosController.getAiringToday()

  res.render('home', airing)
}

module.exports = {
  index
}
