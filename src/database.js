const mysql = require('mysql')
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB_TABLEBNAME,
  multipleStatements: true
})

connection.connect(function(err) {
  if (err) {
  console.error(err);
  return;
  } else {
    console.log('dbExcel is connected');
  }
})

module.exports = connection