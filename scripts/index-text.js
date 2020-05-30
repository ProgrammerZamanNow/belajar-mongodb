// drop current index text
db.products.dropIndex("name_text");

// create index text
db.products.createIndex({
    name: "text",
    category: "text",
    tags: "text"
}, {
    weights: {
        name: 10,
        category: 5,
        tags: 1
    }
});

// search products with text "mie"
db.products.find({
    $text: {
        $search: "mie"
    }
});

// search products with text "mie" OR "laptop"
db.products.find({
    $text: {
        $search: "mie laptop"
    }
});

// search products with text "mie sedap"
db.products.find({
    $text: {
        $search: '"mie sedap"'
    }
});

// search products with text "mie" and NOT "sedap"
db.products.find({
    $text: {
        $search: "mie -sedap"
    }
});

// Debugging query optimization
db.products.find({
    $text: {
        $search: "mie -sedap"
    }
}).explain();