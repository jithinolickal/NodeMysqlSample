
const express = require('express')
const app = express();
const db = require('./config/database') // const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

//To take from .env files - Only for Non-Prod
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// }


// const db = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// })


app.get('/get',(req, res)=>{
    console.log("GET request")
    db.query('SELECT * FROM employees',[],(err, result)=>{
        if(err){
            console.log("Error : ", err);
            res.send(err)
        }else{
            console.log("Query result : ", result)
            res.send(result)
        }
    })
})

app.post('/create',(req,res)=>{
    console.log("POST Request");

    const name = req.body.name;
    const age = req.body.age;

    db.db.query('INSERT INTO employees (name, age) VALUES (?,?)',[name, age],(err, result)=>{
        if(err){
            console.log("Error : ", err);
            res.send(err)
        }else{
            console.log("Successfully Inserted!");
            res.send("Successfully Inserted!")
        }
    })
})

app.listen(process.env.PORT || 3001,()=>{
    console.log(`SERVER STARTED ON PORT ${process.env.PORT}`)
})

