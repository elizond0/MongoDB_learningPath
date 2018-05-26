// 分页demo 每页显示2条数据 按年龄升序排列
db.workmate.find(
    {},
    {name:1,age:1,_id:0}
).limit(2)//每页显示2条数据
.skip(0)//跳过的数量
.sort({age:1})//升序排列 - 1

// $where 可以在条件里使用javascript的方法来进行复杂查询,会增加服务器压力,并且会有被注入的风险
db.workmate.find(
    {$where:"this.age>30"},
    {name:1,age:1,_id:0}
)