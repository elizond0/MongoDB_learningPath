var startTime=new Date().getTime()

var db=connect('company')
var rs=db.randomInfo.find({username:'e2z1eqta'})

rs.forEach(element => {
    printjson(element)
});


var runTime=new Date().getTime()-startTime

print("数据构建成功---------- "+runTime+" (ms)")
// 数据构建成功---------- 926 (ms)


// 查看索引
// db.randomInfo.getIndexes() 

// 建立索引
// db.randomInfo.ensureIndex({username:1})

// 建立索引后
// 数据构建成功---------- 10 (ms)