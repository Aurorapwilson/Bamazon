-- This is for show all databases
show databases;

-- select the database that are we going to use
use bamazon_db;

-- This is for show all tables in the database
show tables;

-- Show all information in the database * means select everything from the table
select * from products;

-- select specific columns from a table

select product_name, price from products;