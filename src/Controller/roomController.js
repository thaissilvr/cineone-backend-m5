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
        const addRoom = new Room(body.time, body.type, body.max_capacity)
        const add = await testROOM.insert(addRoom)
        res.json(add)     
        
        } catch (error) {
        res.json({
            "msg": error.message,
            "error": true
        })
    }
    })

    app.delete(('/room/:id'), async (req, res) => {
        const id = parseInt(req.params.id)

        try {
            const dlt = await testROOM.deleteById(id)
            res.json(dlt)
        } catch (error) {
            res.status(400).json(error)
        }

    })

    app.put(('/room/:id'), async (req, res) => {
       const id = req.params.id
       const body = req.body

       try {
           const upd = await testROOM.alterById(id, body)
           res.json(upd)
           
       } catch (error) {
        res.status(400).json(error)
       }

    })


}


module.exports = room