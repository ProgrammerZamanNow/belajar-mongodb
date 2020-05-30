// membuat wildcard index
db.customers.createIndex({
    "customFields.$**" : 1
});

// Insert many customers
db.customers.insertMany([
    {
        _id: "budi",
        full_name: "Budi",
        customFields: {
            hobby: "Gaming",
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "joko",
        full_name: "Joko",
        customFields: {
            ipk: 3.2,
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "rudi",
        full_name: "Rudi",
        customFields: {
            motherName: "Tini",
            passion: "Entepreneur"
        }
    }
])

// Debug wildcard index
db.customers.find({
    "customFields.passion": "Enterpreneur"
}).explain();
db.customers.find({
    "customFields.ipk": 3.2
}).explain();
db.customers.find({
    "customFields.hobby": "Gaming"
}).explain();