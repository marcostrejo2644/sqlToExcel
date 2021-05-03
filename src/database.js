/* eslint-disable linebreak-style */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_TABLEBNAME,
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('dbExcel is connected');
  }
});

module.exports = connection;
