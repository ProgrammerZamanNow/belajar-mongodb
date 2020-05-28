// alter table customers change name full_name
db.customers.updateMany({}, {
    $rename: {
        name: "full_name"
    }
})

// update products set stock = stock + 10
db.products.updateMany({}, {
    $inc: {
        stock: 10
    }
});

// update products set lastModifiedDate = current_date()
db.products.updateMany({}, {
    $currentDate: {
        lastModifiedDate: {
            $type: "date"
        }
    }
});

