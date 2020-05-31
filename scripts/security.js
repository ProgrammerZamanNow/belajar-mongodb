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