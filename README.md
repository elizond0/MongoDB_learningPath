# MongoDB_learningPath

## 0.MongoDB简介

* MongoDB是一个基于分布式文件存储的数据库,由C++语言编写。目的是为WEB应用提供扩展的高性能的数据存储解决方案。MongoDB是一个介于关系型数据库和非关系型数据库之间的产品,是非关系型数据库当中功能最丰富,最像关系数据库的。他支持的数据结构非常松散,是类似json的bson格式,因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大,其语法有点类似于面向对象的查询语言,几乎可以实现类似关系数据库单表查询的绝大部分功能,而且还支持对数据建立索引。

* MongoDB是非关系型数据库,非关系数据库和关系型数据库的区别:

1. 实质：非关系型数据库的实质：非关系型数据库产品是传统关系型数据库的功能阉割版,通过减少用不到或很少用的功能,来大幅度提高产品性能。
2. 价格：目前的非关系型数据库基本都是免费的,而比较有名气的关系型数据库都是收费的,比如：Oracle、DB2、MSSQL。MySql虽然是免费的,但是处理大型数据还是要提前作很多工作的。
3. 功能：实际开发中,很多业务需求,其实并不需要完整的关系型数据库功能,非关系型数据库的功能就足够使用了。这种情况下,使用性能更高、成本更低的非关系型数据库当然是更明智的选择。

比较复杂和大型的项目不建议使用非关系型数据库,CMS系统这类业务逻辑不复杂的程序,MongoDB是完全可以胜任的。

## 1.MongoDB安装与配置

1. 官网下载[MongoDB](https://www.mongodb.com/)
2. 配置环境变量为mongo.exe所在的完整路径
3. c盘下建立data/db文件夹,运行MongoDB服务端:$ mongod,默认端口27017
4. 连接数据库:$ mongo,$ help可以查看命令提示

## 2.Mongo基本命令

* 数据库常用命令:

1. help                    查看命令提示
2. use yourDB              切换/创建数据库,当创建一个集合(table)的时候会自动创建当前数据库
3. show dbs                查询所有数据库
4. db.dropDatabase()       删除当前使用数据库
5. db.version()            查看数据库版本
6. db.cloneDatabase("127.0.0.1")   从指定主机上克隆数据库
7. db.copyDatabase("mydb", "temp", "127.0.0.1");   从指定的机器上复制指定数据库数据到某个数据库,将本机的mydb的数据复制到temp数据库中
8. db.repairDatabase()     修复当前数据库
9. db/db.getName()         查看当前使用的数据库
10. db.stats()              显示当前db状态
11. db.getMongo()           查看当前db的链接机器地址

* Collection聚集集合:

1. db.createCollection(“collName”, {size: 20, capped: 5, max: 100})    创建一个聚集集合（table),创建成功会显示{“ok”:1},判断集合是否为定容量db.collName.isCapped()
2. db.getCollection("account") 得到指定名称的聚集集合（table）
3. db.getCollectionNames() 得到当前db的所有聚集集合
4. db.printCollectionStats()   显示当前db所有聚集索引的状态

* 用户相关

1. db.addUser("userName", "pwd123", true)  添加一个用户(用户名,密码,是否只读)
2. db.auth("userName", "123123")  数据库认证、安全模式
3. show users              显示当前所有用户
4. db.removeUser("userName")   删除用户
5. [更多命令点击查看](https://blog.csdn.net/piaocoder/article/details/52384756)

## 3.js文件写mongo命令

* 创建030.js文件,使用var,mongoDB对es6支持程度不够
* $ mongo 030.js

## 4.批量插入

* db.test.insert({'num': 1})
* 循环插入性能较慢,应该先将数据储存为数组,然后再批量插入

## 5.update操作

* 普通的update方法,较为繁琐(051.js):
1. $ mongod 打开数据库
2. $ mongo 连接数据库 ; db.runCommand({ping:1})可用于检测是否成功连接数据库
3. $ load('./demo/050.js');在mongo下执行js批量插入数据
4. $ load('./demo/051.js');执行update操作

* update修改器(052.js):
1. $set:{key:value} 更新键值,不存在则创建;{upsert:true}如果匹配条件没有检索到,则新建这条数据,默认不新建;{multi:true}可以多选,贪婪匹配
2. $unset:{} 删除键值
3. $inc 对数字型的数据进行增减操作,字符串无效

* 数组update修改器(053.js):
1. $push 数组追加,插入的值是数组类型的数据
2. $ne 未匹配到则进行操作,匹配到则不操作
3. $addToSet 是$ne的简化升级版
4. $each 批量追加
5. pop 可选参数值值: 1 从末端开始删除  -1 从开始位置删除
6. 数组根据下标定位修改

## 6.应答式命令

* 应答式写入,就是在操作完数据库后,直接返回结果（报表）,可以很好的进行程序的控制和安全机制的处理。
* db.runCommand():是数据库运行命令的执行器,执行命令首选就要使用它,因为它在Shell和驱动程序间提供了一致的接口
* findAndModify:是查找并修改的意思,可以在修改后给我们返回修改的结果,可选属性值:
1. query：需要查询的条件/文档
2. sort: 进行排序
3. remove：[boolean]/update:{obj}: 是否删除查找到的文档，值填写true，可以删除。update和remove不可同时存在
4. new:[boolean]返回更新前的文档还是更新后的文档。
5. fields：需要返回的字段
6. upsert：没有这个值是否增加

## 7.查询：find的不等修饰符

* 简单查找：db.workmate.find({"skill.skillOne":"HTML+CSS"})
* 筛选字段:db.workmate.find({name:1,"skill.skillOne":1})
* 不等修饰符:$lt,$lte,$gt,$gte,$ne(not equal不等于)

## 8.查询：find的多条件查询

* $in 一个key匹配多value 复制到mongo命令行内执行
* $nin 显示不匹配的
* $or 或 - 符合条件之一的
* $and 与 - 同时满足条件的
* $nor 都不 - 同时不满足条件的
* $not 匹配除了条件以外的

## 9.查询：find的数组查询

* 基本数组匹配  完全匹配,顺序不同也无法匹配
* $all 匹配数组中同时符合条件的,顺序无影响
* $in 匹配数组中符合条件之一的,顺序无影响
* $size 匹配数组长度
* $slice 显示匹配项的前NUMBER项,支持负值(倒数),数组

## 10.查询：find的参数使用方法

* find参数:
1. query：这个就是查询条件，MongoDB默认的第一个参数。
2. fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
3. limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
4. skip:跳过多少个显示，和limit结合可以实现分页。
5. sort：排序方式，从小到大排序使用1，从大到小排序使用-1。