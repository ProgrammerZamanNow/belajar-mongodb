db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "eko",
                full_name: "Eko"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "kurniawan",
                full_name: "Kurniawan"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["eko", "kurniawan", "khannedy"]
                }
            },
            update: {
                $set: {
                    full_name: "Eko Kurniawan Khannedy"
                }
            }
        }
    }
])