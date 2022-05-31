const [
  axiosController, helpers
] = [
  require('./axiosController'), require('../utils/helpers')
]

async function getShows(req, res) {
  const animeList = await axiosController.getAnimeList(helpers.getQueryURL(req))
  res.render('shows', { anime: animeList.data })
}
// app.get('/shows', async (req, res) => {
// })

async function updateShows(req, res) {
  const animeList = await axiosController.getAnimeList(helpers.getQueryURL(req))
  res.json({ anime: animeList.data })
}
//   app.post("/shows", async (req, res) => {
//   })

async function getShow(req, res) {
  const [anime, episodes] = await Promise.all([axiosController.getAnime(req.params.id), axiosController.getAnimeEpisodes(req.params.id)])
  const data = { anime: await anime?.data, episodes: await episodes?.data || episodes }
  res.render('show', data)
}
//   app.get('/shows/:id', async (req, res) => {
//   })

async function updateShow(req, res) {
  const episodes = await axiosController.getAnimeEpisodes(req.body, true)
  res.json({ episodes: await episodes?.data || episodes })
}
//   app.post("/shows/:id", async (req, res) => {
//   })

module.exports = {
  getShows,
  updateShows,
  getShow,
  updateShow
}
