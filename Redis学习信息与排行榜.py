import redis
import time

# 连接redis
r = redis.Redis(host='127.0.0.1', port=6379, decode_responses=True)

# 清空库
r.flushall()

# ========== Hash ==========
r.hset("exam:12403030129:info", mapping={
    "studentId": "12403030129",
    "name": "张三",
    "className": "大数据管理与应用",
    "courseId": "COURSE-12403030129-01",
    "status": "learning"
})
r.hset("exam:12403030129:info", "status", "completed")
print(r.hmget("exam:12403030129:info", ["name", "status"]))
print(r.hgetall("exam:12403030129:info"))

# ========== Set ==========
r.sadd("exam:12403030129:chapter", "CH01")
print(r.scard("exam:12403030129:chapter"))
r.sadd("exam:12403030129:chapter", "CH02")
print(r.scard("exam:12403030129:chapter"))
r.sadd("exam:12403030129:chapter", "CH02")
print(r.scard("exam:12403030129:chapter"))
r.sadd("exam:12403030129:chapter", "CH03")
print(r.scard("exam:12403030129:chapter"))
print(r.smembers("exam:12403030129:chapter"))
print(r.sismember("exam:12403030129:chapter", "CH02"))
print(r.sismember("exam:12403030129:chapter", "CH04"))

# ========== ZSet ==========
r.zadd("exam:12403030129:score", {
    "Student:12403030129":74,
    "demo:01":85,
    "demo:02":90,
    "demo:03":60,
    "demo:04":80
})
print(r.zrevrange("exam:12403030129:score",0,2,withscores=True))
r.zincrby("exam:12403030129:score",20,"Student:12403030129")
print(r.zrevrange("exam:12403030129:score",0,2,withscores=True))
print(r.zscore("exam:12403030129:score","Student:12403030129"))
print(r.zrevrank("exam:12403030129:score","Student:12403030129"))

# ========== String ==========
r.setex("exam:12403030129:session",5,"SESS_12403030129")
print(r.get("exam:12403030129:session"))
print(r.ttl("exam:12403030129:session"))
print(r.type("exam:12403030129:session"))
time.sleep(6)
print(r.exists("exam:12403030129:session"))
print(r.ttl("exam:12403030129:session"))

# ========== Type check ==========
print(r.type("exam:12403030129:info"))
print(r.type("exam:12403030129:chapter"))
print(r.type("exam:12403030129:score"))
print(r.type("exam:12403030129:session"))
