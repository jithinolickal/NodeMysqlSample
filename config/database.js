const mysql = require('mysql')


//To take from .env files - Only for Non-Prod - npm install dotenv
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

console.log("database.js", process.env.MYSQL_DATABASE);

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

module.exports = db