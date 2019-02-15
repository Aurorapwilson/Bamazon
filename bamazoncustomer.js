//import all packages
// const mysql = require('mysql');
const inquirer = require('inquirer');

// //create the connection information for the sql database
// const connection = mysql.createConnection({
//     //your port; if not 3306
//     // port: 3306,
//     host: "localhost",
//     //username
//     user: "root",
//     //password
//     password: "",
//     database: "bamazon_db"
// });

// //connect to the mysql server and sql database throw err, 

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log(this);
//     //run the start function after the connection is made to prompt th user
//     console.log("Connected to Database!");
//     bamazon();
//     start();

// });


// //Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// function bamazon (){
//     database.displayProducts();//show products in database

// }

//function which prompts the user for what action they should take 
//Then prompt the user with two messages
//1. The first should ask them the ID of the product they would like to buy.
//inquirer .prompt, and .then function (answer)

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password'

});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id' + connection.threadId);
});

connection.end();


const questions = [
    {type: 'input', 
     name: 'value', 
     message: 'What is the ID of your item?'}


];
    inquirer.prompt(questions)
        .then(function (data) {
            console.log('Data: ', data);

        });


//2. The second message should ask how many units of the product they would like to buy.
//inquirer .prompt, and .then function (answer)