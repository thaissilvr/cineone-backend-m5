const Room = require('../Model/roomModel')
const RoomDAO = require('../DAO/RoomDAO')

const room = (app, bd) => {
   const testROOM = new RoomDAO(bd)
    app.get('/room', async (req, res) => {
        
        try {
            const r = await testROOM.list()
            res.json(r)
        } catch (error) {
            res.status(400).json(error)
        }
    })

    app.get('/room/:id', async (req, res) => {
        const id = req.params.id

        try {
            const r = await testROOM.listId(id)
            res.json(r)
        } catch (error) {
            res.status(400).json(error)
        }
    })



    app.post('/room', async (req,res) => {
        try {
        const body = req.body
        const addRoom = new Room(body.time, body.type, body.max_capacity, body.id_movie)
        const add = await testROOM.insert(addRoom)
        res.json(add)     
        
        } catch (error) {
        res.json({
            "msg": error.message,
            "error": true
        })
    }
    })

}


module.exports = room