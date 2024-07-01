db.supermarket.find({}, { _id: 1, name: 1, city: 1 })
db.supermarket.find({}, { _id: 1, name: 1, city: 1 })
db.supermarket.find({}, { _id: 1, name: 1, city: 1 })

db.product.find({ expiry_date: { $gt: new Date("2024-09-15") } }, { _id: 0, name: 1, expiry_date: 1 })
db.product.find({ $or: [{ name: "Bananas" }, { name: "Broccoli" }] }, { _id: 0, name: 1 })
db.product.find({ name: { $regex: "^P", $options: "i" } }, { _id: 1, name: 1 })
db.product.find({ price: { $lt: 3 } }, { _id: 0, name: 1, price: 1 })

db.käufer.find({ $or: [{ first_name: "Alice" }, { last_name: "Schmidt" }] }, { _id: 1, first_name: 1, last_name: 1 })
db.käufer.find({ "quittung.date": { $gt: new Date("2024-03-01") } }, { _id: 0, first_name: 1, last_name: 1, "quittung.date": 1 })
db.käufer.find({ "quittung.total_price": { $gt: 7 } }, { _id: 0, first_name: 1, last_name: 1, "quittung.total_price": 1 })
db.käufer.find({ first_name: "Clara", "quittung.products.name": "Orange Juice" }, { _id: 0, first_name: 1, last_name: 1, "quittung.products": 1 })
