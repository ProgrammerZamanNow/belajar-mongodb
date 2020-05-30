// Create session collection
db.createCollection("sessions");

// Create TTL Index
db.sessions.createIndex({
    createdAt: 1
}, {
    expireAfterSeconds: 10
})

// Will expire after 10 seconds, but background job run every 60 seconds
db.sessions.insertOne({
    _id: 1,
    session: "Session 1",
    createdAt: new Date()
});

// Update all customers email
db.customers.updateMany({}, [
    {
        $set: {
            email: {
                "$concat": ["$_id", "@" , "example.com"]
            }
        }
    }
])

// Create unique index
db.customers.createIndex({
    email: 1
}, {
    unique: true
});

// failed duplicate email
db.customers.insertOne({
    _id: "gagal",
    full_name : "Gagal",
    email: "eko@example.com"
});