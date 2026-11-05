db.inventory.deleteOne({_id:"BOOK-12403030129"})
db.inventory.insertOne({_id:"BOOK-12403030129",title:"NoSQL数据库教材",stock:9})
function placeOrder(requestId, forceError = false) {
    const session = db.getMongo().startSession();
    session.startTransaction();
    try{
        let deductRes = db.inventory.updateOne(
            {_id:"BOOK-12403030129", stock:{$gte:3}},
            {$inc:{stock:-3}},
            {session:session}
        );
        if(deductRes.modifiedCount!==1){
            throw new Error("库存不足");
        }
        if(forceError){
            throw new Error("人为异常，触发回滚");
        }
        db.orders.insertOne(
            {
                _id:requestId,
                bookId:"BOOK-12403030129",
                studentId:"12403030129",
                quantity:3
            },
            {session:session}
        );
        session.commitTransaction();
        session.endSession();
        return {ok:true,msg:"下单成功"};
    }catch(e){
        session.abortTransaction();
        session.endSession();
        return {ok:false,msg:e.message};
    }
}
r4_2 = placeOrder("req003",false);
printjson(r4_2);
r4_2 = placeOrder("req004",false);
printjson(r4_2);
db.inventory.findOne({_id:"BOOK-12403030129"})
db.orders.find()