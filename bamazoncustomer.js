//import all packages
const inquirer = require('inquirer');
const connection = require('./connection')


//establish connection 
connection.connect();

// Initialize everything and show the questions when the applciation start
function init() {


  //prompt
  const questions = [{
      type: 'input',
      message: '\n What is the ID of your item? \n\n',
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
//executes init function
init();



function showProducts() {
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.table(result);

  });

}

showProducts();


//after place order need to check availibility of items 
function checkAvailibility(item_id, userQty) {


  //need to make a query to search for item_ID
  connection.query("select * from products where item_id = ?", [item_id], function (err, result) {
    if (err) throw err;
    const item = result[0];

    const stockQuant = parseInt(item.stock_quantity);
    //if the quantity is less than what the user has 
    if (parseInt(userQty) <= stockQuant) {
      //if what they are asking is greater than we cannot process the order 
      console.log("Yes, order can be processed!");

      //if the order can be fulfilled, we want to decrease the stock quantity
      const newQuant = parseInt(stockQuant) - parseInt(userQty);
      //Once the update goes through, show the customer the total cost of their purchase.
      const totalPrice = userQty * item.price;
      const confirmation = [{

        type: 'confirm',
        message: 'Do you wish to complete purchase? ' + totalPrice + '\n\n',
        name: 'confirm_name'

      }];
      inquirer.prompt(confirmation)
        .then(function (data) {
          if (data.confirm_name) {
            //then update the quantity in the mysql database, to alert what is in stock
            connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [newQuant, item.item_id]);

            console.log("Your order is complete, Thank you for your purchase!");
          } else {
            init();
          }

        });








    } else {
      console.log("No, order cannot be processed!")
    }



  });





}