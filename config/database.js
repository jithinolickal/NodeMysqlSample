const mysql = require('mysql')


//To take from .env files - Only for Non-Prod - npm install dotenv
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

console.log("database.js", process.env.MYSQL_DATABASE);

const dbConnectionInfo  = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 3306
}

//create mysql connection pool
var db = mysql.createPool(
    dbConnectionInfo
  );
  
  // Attempt to catch disconnects 
  db.on('connection', function (connection) {
    console.log('DB Connection established');
  
    connection.on('error', function (err) {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
      console.error(new Date(), 'MySQL close', err);
    });
  
  });
  

module.exports = db