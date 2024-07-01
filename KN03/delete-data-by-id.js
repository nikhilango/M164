db.kaeufer.deleteOne({ "_id": ObjectId("667046600187c3c2df18649b") })

db.product.deleteMany({ $or: [{ _id: ObjectId("6670465f0187c3c2df186494") }, { _id: ObjectId("6670465f0187c3c2df186495") }] })