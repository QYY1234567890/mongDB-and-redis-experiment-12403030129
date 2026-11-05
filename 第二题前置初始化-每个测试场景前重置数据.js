const SID = "12403030129";
const Stock = 9;
const Buy = 3;
const bookId = "BOOK-" + SID;

db.inventory.deleteOne({_id:"BOOK-12403030129"})
db.inventory.insertOne({
    _id:"BOOK-12403030129",
    title:"NoSQL数据库教材",
    stock:9
})
// 核验
db.inventory.findOne({_id:"BOOK-12403030129"})
