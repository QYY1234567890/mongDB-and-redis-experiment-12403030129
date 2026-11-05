function atomicDeduct(bookId, buyQty) {
    let res = db.inventory.updateOne(
        {
            _id: bookId,
            stock: {$gte: buyQty}
        },
        {
            $inc: {stock: -buyQty}
        }
    );
    return res;
}
// T1调用
let r1 = atomicDeduct("BOOK-12403030129",3);
printjson(r1);
// 核验
db.inventory.findOne({_id:"BOOK-12403030129"})