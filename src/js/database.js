const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'oleh',
  password: 'password',
  database: 'mydb'
})