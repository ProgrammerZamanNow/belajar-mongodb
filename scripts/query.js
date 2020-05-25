// select *  from customers where _id = 'khannedy'
db.customers.find({
    _id: "khannedy"
});

// select * from customers where name = 'Eko Kurniawan Khannedy'
db.customers.find({
    name: "Eko Kurniawan Khannedy"
});

// select * from products where price = 2000
db.products.find({
    price: 2000
});

// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});