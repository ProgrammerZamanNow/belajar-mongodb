// use admin database
// use admin

db.createUser(
    {
        user: "mongo",
        pwd: "mongo",
        roles: [ 
            "userAdminAnyDatabase",
            "readWriteAnyDatabase" 
        ]
    }
)

// Connect to mongodb with username & password
// mongo --username mongo --password mongo --host localhost --port 27017
