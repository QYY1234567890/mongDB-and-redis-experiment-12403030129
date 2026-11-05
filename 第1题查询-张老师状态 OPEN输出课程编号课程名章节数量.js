const SID = "12403030129";
const examDB = db.getSiblingDB("exam_" + SID);
examDB.courses.find(
  {teacher:"张老师", status:"OPEN"},
  {
    _id:1,
    title:1,
    chapterCount: {$size:"$chapters"}
  }
);