// 数组update修改器

// 1. $push 数组追加,插入的值是数组类型的数据
// db.workmate.update({name:'abc4'},{$push:{parents:'haha'}})

// 2. $ne 未匹配到则进行操作,匹配到则不操作
// db.workmate.update({name:'abc4',parents:{$ne:'haha'}},{$push:{parents:'hahaha'}}) 

// 3. $addToSet 是$ne的简化升级版
// db.workmate.update({name:'abc4'},{$addToSet:{parents:'hahaha'}})

// 4. $each 批量追加
// var newChildren=['a4','b4','c4']
// db.workmate.update({name:'abc4'},{$addToSet:{children:{$each:newChildren}}}) //$addToSet可以有效避免追加重复数据

// 5. pop 可选参数值值: 1 从末端开始删除  -1 从开始位置删除
// db.workmate.update({name:'abc4'},{$pop:{children:1}})

// 6. 数组根据下标定位修改
db.workmate.update({name:'abc4'},{$set:{"children.1":'cccccccccccccc'}})


print('[SUCCESS]: The data was updated successfully.');