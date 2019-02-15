

-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "favorite_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect favorite_db --
USE bamazon_db;

-- Create a Table inside of that database called `products`.

CREATE TABLE products (
--    (unique id for each product)
      item_id INT NOT NULL AUTO_INCREMENT,
-- (Name of product)
   product_name VARCHAR(100) NOT NULL, 
   
   department_name VARCHAR(40) NOT NULL,
-- (cost to customer) 
    price INTEGER(11) NULL,
-- (how much of the product is available in stores)
   stock_quantity INTEGER(11) NULL,
   PRIMARY KEY (item_id) 

);


INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Yamaha P71', 'Digital Piano', 425, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Yamaha P45', 'Digital Piano', 579, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('X-keys Programmable Keypads and Keyboards (60 Key, XK-60)', 'Electronics', 170, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('The ONE Smart Piano Keyboard with Lighted Keys', 'Musical Instruments', 294, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Ibanez 4 String Bass Guitar, Right Handed, Black','Musical Instruments', 200, 18 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Yamaha C40II Classical Guitar','Musical Instruments', 140, 16 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Pearl RS525SCC706 Roadshow 5-Piece Drum Set, Charcoal Metallic', 'Musical Instruments', 461, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('BUGERA 1 Guitar Amplifier Cabinet, Black (112TS)', 'Amplifiers & Effects', 160, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('GoXLR - Mixer, Sampler, & Voice FX for Streamers', 'Studio Recording Equipment', 400, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Mendini by Cecilio MTT-BK Trumpet, Black, Bb', 'Band & Orchestra', 100, 3);





