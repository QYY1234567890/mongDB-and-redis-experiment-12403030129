const SID = "12403030129";
const examDB = db.getSiblingDB("exam_" + SID);
let res= examDB.courses.updateOne(
  {
    _id: "COURSE-" + SID + "-01",
    "chapters.chapterId": "CH02"
  },
  {
    $set: {
      "chapters.$.title": "Redis 基础与应用-29"
    }
  }
);
printjson(res);
examDB.courses.findOne({_id:"COURSE-" + SID + "-01"});
