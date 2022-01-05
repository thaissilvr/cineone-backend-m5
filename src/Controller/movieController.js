const Movie = require('../Model/movieModel')
const MovieDAO = require('../DAO/MovieDAO')

const movie = (app, bd) => {
    const testMOVIE = new MovieDAO(bd)
     app.get('/movie', async (req, res) => {
         
         try {
             const m = await testMOVIE.list()
             res.json(m)
         } catch (error) {
             res.status(400).json(error)
         }
     })
 
     app.get('/movie/:id', async (req, res) => {
         const id = req.params.id
         
         try {
             const m = await testMOVIE.listId(id)
             res.json(m)
         } catch (error) {
             res.status(400).json(error)
         }
     })
 
 
 
     app.post('/movie', async (req,res) => {
         try {
         const body = req.body
         const addMovie = new Movie(body.name, body.rating, body.genre, body.movie_length, body.synopsis)
         const add = await testMOVIE.insert(addMovie)

         res.json(add)     
         
         } catch (error) {
         res.json({
             "msg": error.message,
             "error": true
         })
     }
     })
 
 }
 module.exports = movie

