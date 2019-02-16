//import all packages
const inquirer = require('inquirer');
const connection = require('./connection')


//establish connection 
connection.connect();

// Initialize everything and show the questions when the applciation start
function init() {

  // Printing my products
  // showProducts();

  //prompt
  const questions = [{
      type: 'input',
      message: 'What is the ID of your item? \n\n',
      name: 'itemId'
    },

    {
      type: 'input',
      message: 'How many units of the product they would like to buy?',
      name: 'quantity',
    }
  ];
  inquirer.prompt(questions)
    .then(function (data) {
      checkAvailibility(data.itemId, data.quantity);
    });
}

init();

// connection.query('SELECT 1 + 1 AS solution', function (error, results) {
//   if (error) throw error;
//   // console.log('Connected');
// });

// connection.end();
//showtable

function showProducts() {
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    for (i = 0; i < result.length; i++) {
      var data = result[i];
      console.log("data item: " + data.item_id + "\n product name: " + data.product_name + "\n price: " + data.price + "\n");
    }
  });

}

// showProducts();



//
function checkAvailibility(id, quantity) {
  let hasAvailability = false;

  connection.query("select * from products where item_id = ${id} and stock_quantity = ${quantity} limit 1", function (err, result) {
    if (err) throw err;
    for (i = 0; i < result.length; i++) {
      var data = result[i];
      console.log("data item: " + data.item_id + "\n product name: " + data.product_name + "\n price: " + data.price + "\n");
    }
  });
}