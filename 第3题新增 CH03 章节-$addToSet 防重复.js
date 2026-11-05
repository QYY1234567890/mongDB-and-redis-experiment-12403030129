const SID = "12403030129";
const examDB = db.getSiblingDB("exam_" + SID);
let res = examDB.courses.updateOne(
  {_id: "COURSE-" + SID + "-01"},
  {
    $addToSet: {
      chapters: {
        chapterId:"CH03",
        title:"Redis 高级操作",
        hours: 4
      }
    }
  }
);
printjson(res);
db.getSiblingDB("exam_12403030129").courses.findOne({_id:"COURSE-12403030129-01"});