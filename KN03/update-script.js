db.käufer.updateOne(
    { _id: käufer_1 },
    { $set: { first_name: "Alice", last_name: "Müller" } }
);

db.product.updateMany(
    { $or: [{ name: "Apples" }, { name: "Bananas" }] },
    { $mul: { price: 1.1 } }
)


db.supermarket.replaceOne(
    { _id: supermarket },
    {
        _id: new ObjectId(),
        name: "Butter Chicken",
        city: "New Delhi"
    }
);