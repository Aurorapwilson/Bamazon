# Bamazon
# Overview
Welcome to Bamazon, a CLI-app that utilizes Node.js and mysql. It is an Amazon-like storefront with the MySQL skills I learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. 
# The technologies I used were:
# Node.js & MySQL
# inquirer npm 

# Steps to creating Bamazon
* Require MySQL module.
* Create Connection variable using mysql.createConnection() method.
* Connect by using con.connect() method.
* Creating SQL select query.
* Execute query by using .query() method.
* Show data on the console


## Instructions

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
![](screenshots/ScreenShot2019-02-12at11.51.40PM.png)

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
![](screenshots/ScreenShot2019-02-16at1.16.44AM.png)

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

![](https://media.giphy.com/media/8mqygtxbkA6LCfZNMn/giphy.gif)


7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
![](https://media.giphy.com/media/MRq7AwkWw0dPflOO69/giphy.gif)
- - -

* If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.

- - -

