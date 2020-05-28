// update products set category = "food" where _id = 1
db.products.updateOne({
    _id: 1
},{
    $set: {
        category: "food"
    }
});

// update products set category = "food" where _id = 2
db.products.updateOne({
    _id: 2
},{
    $set: {
        category: "food"
    }
});

// update products set tags = ["food"] where category = "food" and tags is null
db.products.updateMany({
    $and: [
        {
            category :{
                $eq: "food"
            }
        },
        {
            tags: {
                $exists: false
            }
        }
    ]
}, {
    $set: {
        tags: ["food"]
    }
})

// update products set wrong = "wrong"
db.products.updateMany({}, [
    {
        $set: {
            wrong: "wrong"
        }
    }
]);

// update products set wrong = null
db.products.updateMany({}, [
    {
        $set: {
            wrong: null
        }
    }
]);
db.products.updateMany({}, [
    {
        $unset: [ "wrong" ] 
    }
]);

// insert wrong document
db.products.insertMany([
    {
        _id: 9,
        name: "Ups Salah",
        wrong: "Salah Lagi"
    }
]);

// replace document with id 9
db.products.replaceOne({
    _id: 9
}, {
    name: "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
    price: new NumberLong(1100000),
    category: "shoes",
    tags: [
        "adidas", "shoes", "running"
    ]
});