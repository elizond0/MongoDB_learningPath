// 使用js文件查找数据库.  $ mongo load('*.js')
var db=connect('company');
var result=db.workmate.find()

// 方法一 游标:hasNext()
// while(result.hasNext()){
//     printjson(result.next())
// }

// 方法二 循环:foreach
result.forEach(function(result){
    printjson(result)
});