# MongoDB & Redis 实验代码
学号：12403030129

## 环境说明
- MongoDB：在 Navicat Premium 中编写、调试与执行脚本
- Redis：部署在 hadoop1（CentOS 虚拟机）
- 数据库：`exam_12403030129`
- 集合：`courses`、`inventory`、`orders`
- Redis 客户端：Python + redis-py

## 文件清单
1. 第一题创建courses集合并插入3条课程数据.js —— 初始化courses基础数据
2. 第二题前置初始化-每个测试场景前重置数据.js —— 测试前置清理重置脚本
3. 第1题查询-张老师状态OPEN输出课程编号课程名章节数量.js —— 条件查询
4. 第1题原子扣减-单文档原子更新满足条件过滤.js —— 原子更新 $inc
5. 第2题修改01号课程CH02章节标题局部更新.js —— 局部字段更新
6. 第2题事务下单函数-正常提交扣库存+生成订单.js —— MongoDB事务正常提交
7. 第3题新增CH03章节-addToSet防重复.js —— $addToSet 去重添加
8. 第3题事务异常回滚-中途报错库存不变订单不插入.js —— 事务回滚测试
9. 第4题超卖测试-库存9两个请求各买3.js —— 并发超卖场景测试
10. 第4题验证脚本.js —— 超卖结果校验
11. Redis学习信息与排行榜.py —— 连接虚拟机hadoop1上的Redis，练习五大基础数据类型、排行榜实现

## 使用步骤
1. MongoDB 部分：在 Navicat Premium 打开 js 脚本，优先执行两个初始化脚本，再依次运行各题目脚本
2. Redis 部分：保证 hadoop1 虚拟机的 Redis 服务启动，本地安装 redis-py，运行 Python 脚本进行测试
