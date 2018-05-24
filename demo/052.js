// update修改器

// 1. $set:{key:value} 更新键值,不存在则创建
// db.workmate.update({name:"abc3"},{$set:{age:20}})
// db.workmate.update({name:"abc3"},{$set:{"children.a1":'aaaaaaaaaaaaaaa'}}) //内嵌数据
// db.workmate.update({},{$set:{parents:[]}},{multi:true}) //{multi:true}可以多选,贪婪匹配
db.workmate.update({name:"abc4"},{$set:{parents:[]}},{upsert:true}) //{upsert:true}如果匹配条件没有检索到,则新建这条数据,默认不新建

// 2. $unset:{} 删除键值
// db.workmate.update({name:'abc2'},{$unset:{age:''}})

// 3. $inc 对数字型的数据进行增减操作,字符串无效
// db.workmate.update({name:'abc3'},{$inc:{age:'-2'}})

print('[SUCCESS]: The data was updated successfully.');