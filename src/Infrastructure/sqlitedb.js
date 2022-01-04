const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')

const bd = new sqlite3.Database(caminhoArq);
//creating table
const createTableRoom = `CREATE TABLE IF NOT EXISTS Room
(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "time" varchar(5) NOT NULL,
    "type" varchar(2) NOT NULL,
    "max_capacity" tinyint(40) NOT NULL
  );`

  bd.run(createTableRoom, (error) => {
    if(error) {
        console.log("Try again", error.message)
    } else {
        console.log("The table has been created successfully.")
    }
  })

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);


module.exports = bd;