const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'newdatabase.db')

const bd = new sqlite3.Database(caminhoArq);
//creating table

const createTableMovie = `CREATE TABLE IF NOT EXISTS Movie
(
    "id_movie" INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" varchar (255) NOT NULL,
    "rating" varchar (255) NOT NULL,
    "genre" varchar(255) NOT NULL,
    "movie_length" varchar(10) NOT NULL,
    "synopsis" varchar(255) NOT NULL,
    "urlImg" varchar(255) NOT NULL
  );`

  bd.run(createTableMovie, (error) => {
    if(error) {
        console.log("Try again", error.message)
    } else {
        console.log("The table MOVIE has been created successfully.")
    }
  })

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

const createTableRoom = `CREATE TABLE IF NOT EXISTS Room
(
    "id_room" INTEGER PRIMARY KEY AUTOINCREMENT,
    "time" varchar(5) NOT NULL,
    "type" varchar(2) NOT NULL,
    "max_capacity" tinyint(40) NOT NULL,
    "id_movie" INTERGER NOT NULL,
         FOREIGN KEY (id_movie) REFERENCES Movie (id_movie)
  );`

  bd.run(createTableRoom, (error) => {
    if(error) {
        console.log("Try again", error.message)
    } else {
        console.log("The table ROOM has been created successfully.")
    }
  })

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;