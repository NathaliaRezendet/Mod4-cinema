const mysql = require('mysql2')

const create = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'natdan18',
    database: 'cliente'
})

module.exports = create