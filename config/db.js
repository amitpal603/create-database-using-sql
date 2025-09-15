const sql = require('mysql2')
require('dotenv').config()

const connection = sql.createConnection({
    host : 'localhost',
    user: `${process.env.ROOT}`,
    password: `${process.env.MYSQL_PASSWORD}`
})

connection.connect((err) => {
    if(err) return console.log(err);
    console.log('mySql connect successFully..');
    
    connection.query('CREATE DATABASE  IF NOT EXISTS Users',(err) => {
        if(err) throw err
        console.log('create database successFully.. or exists already');
        
    })
})

module.exports = sql.createPool({
    host : 'localhost',
    user :`${process.env.ROOT}`,
    password : `${process.env.MYSQL_PASSWORD}`,
    database : 'Users'
})

