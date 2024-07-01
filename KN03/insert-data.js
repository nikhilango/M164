var product_1 = new ObjectId();
var product_2 = new ObjectId();
var product_3 = new ObjectId();
var product_4 = new ObjectId();
var product_5 = new ObjectId();
var product_6 = new ObjectId();

var supermarket = new ObjectId();

db.supermarket.insertOne({
    _id: supermarket,
    name: "Supermart",
    city: "Berlin"
});

db.product.insertMany([
    {
        _id: product_1,
        name: "Apples",
        price: 2.50,
        expiry_date: new Date("2024-07-01"),
        supermarket: supermarket
    },
    {
        _id: product_2,
        name: "Bananas",
        price: 1.20,
        expiry_date: new Date("2024-07-05"),
        supermarket: supermarket
    },
    {
        _id: product_3,
        name: "Broccoli",
        price: 3.00,
        expiry_date: new Date("2024-08-10"),
        supermarket: supermarket
    },
    {
        _id: product_4,
        name: "Chicken Breast",
        price: 8.50,
        expiry_date: new Date("2024-09-15"),
        supermarket: supermarket
    },
    {
        _id: product_5,
        name: "Orange Juice",
        price: 4.00,
        expiry_date: new Date("2024-10-20"),
        supermarket: supermarket
    },
    {
        _id: product_6,
        name: "Potato Chips",
        price: 2.00,
        expiry_date: new Date("2024-11-25"),
        supermarket: supermarket
    }
]);

var käufer_1 = new ObjectId();
var käufer_2 = new ObjectId();
var käufer_3 = new ObjectId();

db.käufer.insertOne({
    _id: käufer_1,
    first_name: "Alice",
    last_name: "Müller",
    quittung: {
        kasse: 1,
        total_price: 3.70,
        date: new Date("2024-01-01"),
        products: [
            {
                name: "Apples",
                price: 2.50,
                expiry_date: new Date("2024-07-01")
            },
            {
                name: "Bananas",
                price: 1.20,
                expiry_date: new Date("2024-07-05")
            }
        ]
    }
});

db.käufer.insertOne({
    _id: käufer_2,
    first_name: "Bob",
    last_name: "Schmidt",
    quittung: {
        kasse: 2,
        total_price: 8.50,
        date: new Date("2024-03-15"),
        products: [
            {
                name: "Chicken Breast",
                price: 8.50,
                expiry_date: new Date("2024-09-15")
            }
        ]
    }
});

db.käufer.insertOne({
    _id: käufer_3,
    first_name: "Clara",
    last_name: "Wagner",
    quittung: {
        kasse: 3,
        total_price: 6.00,
        date: new Date("2024-04-20"),
        products: [
            {
                name: "Orange Juice",
                price: 4.00,
                expiry_date: new Date("2024-10-20")
            },
            {
                name: "Potato Chips",
                price: 2.00,
                expiry_date: new Date("2024-11-25")
            }
        ]
    }
});
