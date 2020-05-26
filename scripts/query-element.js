// select * from products where category is null
db.products.find({
    category: {
        $exists: false
    }
});
