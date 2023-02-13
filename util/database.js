const mysql = require('mysql2');
const config = require('../config/config.json')

//Make a Pool and establish connection to the database
//A pool include the required informations to access the database
const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
})

module.exports = pool.promise();