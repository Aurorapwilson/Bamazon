var mysql      = require('mysql');

//import mysql database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'bamazon_db'

});

module.exports = connection;
