DROP DATABASE IF EXISTS iStore;
CREATE DATABASE iStore;
USE iStore;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price INT NOT NULL,
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone SE", "Phones", 349, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 6S", "Phones", 449, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 6S Plus", "Phones", 549, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 7", "Phones", 649, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 7 Plus", "Phones", 699, 275);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 8", "Phones", 749, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 8 Plus", "Phones", 849, 350);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", "Phones", 950, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro 13", "Laptops", 1450, 450);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro 15", "Laptops", 1550, 500);