class RoomDAO {
    constructor(db) {
        this.db = db
    }

    list() {
        return new Promise ((res, rej) => {
         const sql = `SELECT * FROM Room`
         this.db.all(sql, (error, rows) => {
            if(error) {
                rej(error.message)
            } else {
                res(rows)
            }
         })
        })
    }

    listId(id) {
        return new Promise ((res, rej) => {
         const sqlRoom = `SELECT * FROM Room WHERE id = ?`
         this.db.all(sqlRoom, id, (error, rows) => {
            if(error) {
                rej(error.message)
            } else {
                res(rows)
            }
         })
        })
    }



    insert(addRoom) {
        return new Promise ((res, rej) => {
            const sql = `INSERT INTO Room (time, type, max_capacity, id_movie) VALUES (?, ?, ?, ?)`
        
            this.db.run(sql, [addRoom.time, addRoom.type, addRoom.max_capacity, addRoom.id_movie], function (error) {
                if(error){
                    rej({
                        "msg" : error.message,
                        "error" : true 
                    })
                } else {
                    res(this.lastID)
                }
            }
            
        )}
    )}

}
          

module.exports = RoomDAO;