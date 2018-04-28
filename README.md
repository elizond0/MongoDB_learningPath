# MongoDB_learningPath

## 0.MongoDB简介
MongoDB是一个基于分布式文件存储的数据库，由C++语言编写。目的是为WEB应用提供扩展的高性能的数据存储解决方案。MongoDB是一个介于关系型数据库和非关系型数据库之间的产品，是非关系型数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

MongoDB是非关系型数据库,非关系数据库和关系型数据库的区别:
1. 实质：非关系型数据库的实质：非关系型数据库产品是传统关系型数据库的功能阉割版，通过减少用不到或很少用的功能，来大幅度提高产品性能。
2. 价格：目前的非关系型数据库基本都是免费的，而比较有名气的关系型数据库都是收费的，比如：Oracle、DB2、MSSQL。MySql虽然是免费的，但是处理大型数据还是要提前作很多工作的。
3. 功能：实际开发中，很多业务需求，其实并不需要完整的关系型数据库功能，非关系型数据库的功能就足够使用了。这种情况下，使用性能更高、成本更低的非关系型数据库当然是更明智的选择。

比较复杂和大型的项目不建议使用非关系型数据库，CMS系统这类业务逻辑不复杂的程序，MongoDB是完全可以胜任的。

## 1.MongoDB安装与配置
1. 官网下载[MongoDB](https://www.mongodb.com/)
2. 配置环境变量为mongo.exe所在的完整路径
3. c盘下建立data/db文件夹,运行MongoDB服务端:$ mongod,默认端口27017
4. 连接数据库:$ mongo,$ help可以查看命令提示

## 2.Mongo基本命令

1. 数据库常用命令:
help                    查看命令提示
use yourDB              切换/创建数据库,当创建一个集合(table)的时候会自动创建当前数据库
show dbs                查询所有数据库
db.dropDatabase()       删除当前使用数据库
db.version()            查看数据库版本
db.cloneDatabase("127.0.0.1")   从指定主机上克隆数据库
db.copyDatabase("mydb", "temp", "127.0.0.1");   从指定的机器上复制指定数据库数据到某个数据库,将本机的mydb的数据复制到temp数据库中
db.repairDatabase()     修复当前数据库
db/db.getName()         查看当前使用的数据库
db.stats()              显示当前db状态
db.getMongo()           查看当前db的链接机器地址

2. Collection聚集集合:
db.createCollection(“collName”, {size: 20, capped: 5, max: 100})    创建一个聚集集合（table),创建成功会显示{“ok”:1},判断集合是否为定容量db.collName.isCapped()
db.getCollection("account") 得到指定名称的聚集集合（table）
db.getCollectionNames() 得到当前db的所有聚集集合
db.printCollectionStats()   显示当前db所有聚集索引的状态

3. 用户相关
db.addUser("userName", "pwd123", true)  添加一个用户(用户名,密码,是否只读)
db.auth("userName", "123123")  数据库认证、安全模式
show users              显示当前所有用户
db.removeUser("userName")   删除用户

[更多点击查看](https://blog.csdn.net/piaocoder/article/details/52384756)

## 3.js文件写mongo命令
创建03.js文件,使用var,mongoDB对es6支持程度不够
$ mongo 03.js
