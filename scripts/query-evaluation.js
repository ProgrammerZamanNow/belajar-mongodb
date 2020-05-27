// select * from products where price > 1000000
db.products.find({
    $expr: {
        $gt: ["$price", 1000000]
    }
});

// select * from customers where toUpper(_id) = 'KHANNEDY'
db.customers.find({
    $expr: {
        $eq: [
            { $toUpper: "$_id" }, 
            "KHANNEDY"
        ]
    }
});

// select * from products where name is not null and category is not null
db.products.find({
    $jsonSchema: {
        required: [ "name", "category"]
    }
});

// select * from products where name is not null and type(name) = 'string' and type(price) = 'long'
db.products.find({
    $jsonSchema: {
        required: [ "name"],
        properties: {
            name: {
                bsonType: "string"
            },
            price: {
                bsonType: "long"
            }
        }
    }
});

// select * from products where price % 5 = 0
db.products.find({ 
    price: { 
        $mod: [5, 0]
    } 
});

// select * from products where name like "%mie%"
db.products.find({
    name: {
        $regex: /mie/,
        $options: "i"
    }
});

// select * from products where name like "Mie%"
db.products.find({
    name: {
        $regex: /^Mie/
    }
});

// create text index on products
db.products.createIndex({
    name: "text"
});

// select * from products where (name like "%mie%" or name like "%sedap%")
db.products.find({
    $text: {
        $search: "mie sedap"
    }
});

// select * from products where name like "%mie sedap%"
db.products.find({
    $text: {
        $search: '"mie sedap"'
    }
});

// select * fro customers where _id = "khannedy"
db.customers.find({
    $where: function(){
        return this._id == "khannedy";
    }
});