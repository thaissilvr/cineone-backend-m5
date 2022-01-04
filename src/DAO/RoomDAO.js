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
            const sql = `INSERT INTO Room (time, type, max_capacity) VALUES (?, ?, ?)`
        
            this.db.run(sql, [addRoom.time, addRoom.type, addRoom.max_capacity], function (error) {
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


    deleteById(id) {  
        return new Promise ((res, rej)=>{
            const sql = `DELETE FROM Room WHERE id = ?`
            this.db.run(sql, id, (error) =>{
                if (error) {
                    rej({
                        "msg" : error.message,
                        "error": true
                    })
             } else {
                res({
                    "msg": "Id deleted successfully",
                    "error" : false
                })
             }
            })
        })
    }

    alterById(id, body) {
        return new Promise ((res, rej)=>{
            const sql = `UPDATE Room SET
            time = ?, type = ?, max_capacity = ? WHERE id = ?`
            this.db.run(sql, [body.time, body.type, body.max_capacity, id], (error) =>{
                if (error) {
                    rej({
                        "msg" : error.message,
                        "error": true
                    })
             } else {
                res({
                    "msg": "ID updated successfully",
                    "error" : false
                })
             }
            })
        })
    }

}
          

module.exports = RoomDAO;