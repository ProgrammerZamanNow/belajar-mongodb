// Insert document customers
db.customers.insertOne({
  _id: "khannedy",
  name: "Eko Kurniawan Khannedy"
});

// Insert document products
db.products.insertMany([
  {
    _id: 1,
    name: "Indomie Ayam Bawang",
    price: new Long(2000)
  },
  {
    _id: 2,
    name: "Mie Sedap",
    price: new Long(2000)
  }
]);

// Insert document orders
db.orders.insertOne({
  _id: new ObjectId(),
  total: new Long(8000),
  items: [
    {
      product_id: 1,
      price: new Long(2000),
      quantity: new NumberInt(2)
    },
    {
      product_id: 2,
      price: new Long(2000),
      quantity: new NumberInt(2)
    }
  ]
})