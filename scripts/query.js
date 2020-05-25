// where _id = 'khannedy'
db.customers.find({
    _id: "khannedy"
});

// where name = 'Eko Kurniawan Khannedy'
db.customers.find({
    name: "Eko Kurniawan Khannedy"
});

// where price = 2000
db.products.find({
    price: 2000
});