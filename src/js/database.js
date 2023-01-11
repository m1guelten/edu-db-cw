const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'miguel',
  password: '1234567890',
  database: 'myDataBase',
});
