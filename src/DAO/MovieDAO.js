class MovieDAO {
    constructor(db) {
        this.db = db
    }

    list() {
        return new Promise ((res, rej) => {
         const sql = `SELECT * FROM Movie`
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
         const sqlMovie = `SELECT * FROM Movie WHERE id_movie = ?`
         this.db.all(sqlMovie, id, (error, rows) => {
            if(error) {
                rej(error.message)
            } else {
                res(rows)
            }
         })
        })
    }



    insert(addMovie) {
        return new Promise ((res, rej) => {
            const sql = `INSERT INTO Movie (name, rating,  genre, movie_length, synopsis, urlImg) VALUES (?, ?, ?, ?, ?, ?)`
        
            this.db.run(sql, [addMovie.name,  addMovie.rating,  addMovie.genre, addMovie.movie_length, addMovie.synopsis, addMovie.urlImg], function (error) {
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
          

module.exports = MovieDAO;