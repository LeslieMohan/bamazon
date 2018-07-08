create database products;

use products;


create table products (
    item_id int primary key auto_increment,
    product_name varchar(50) not null,
    department_name varchar(255),
    price float not null,
    stock_quantity int default 0
);

insert into products (product_name, department_name, price, stock_quantity) values
("skates", "sports", 800.00, 300), 
("hammer", "tools", 20.00, 500), 
("notebook", "stationary", 10.00, 80), 
("blouse", "womens_apparel", 75.00, 150), 
("Neo-Citron", "pharmacy", 13.69, 300), 
("sandals", "footwear", 80.00, 350), 
("iphone", "electronics", 800.00, 1000), 
("fridge", "appliances", 3000.00, 50), 
("coat", "winterwear", 200.00, 300), 
("stroller", "baby", 300.00, 200) 