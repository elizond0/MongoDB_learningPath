var startTime=new Date().getTime()

var db=connect('company')

// 索引查询的默认顺序是按照数据库内索引建立顺序的,
// hint可以指定索引查询,常用于数字索引
var rs=db.randomInfo.find({username:'e2z1eqta',randomNum0:89199,}).hint({randomNum0:1})

rs.forEach(element => {
    printjson(element)
});

var runTime=new Date().getTime()-startTime

print("数据构建成功---------- "+runTime+" (ms)")
// 数据构建成功---------- 926 (ms)

// 索引删除 dropIndex()传入的参数是索引的name值,而不是key值randomNum0
// db.randomInfo.dropIndex('randomNum0_1')
