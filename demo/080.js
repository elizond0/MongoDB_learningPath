// $in 一个key匹配多value 复制到mongo命令行内执行
db.workmate.find(
    {age:{$in:[25,33]}},//匹配25/33两个值
    {name:1,"skill.skillOne":1,age:1,_id:0}
)

// $nin 显示不匹配的
db.workmate.find(
    {age:{$nin:[25,33]}},//匹配除了25/33两个值
    {name:1,"skill.skillOne":1,age:1,_id:0}
)

// $or 或 - 符合条件之一的
db.workmate.find(
    {$or:[
        {age:{$gte:30}},//大于等于30岁 或会PHP的
        {"skill.skillThree":'PHP'}
    ]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)

// $and 与 - 同时满足条件的
db.workmate.find(
    {$and:[
        {age:{$gte:30}},//大于等于30岁 并且会PHP的
        {"skill.skillThree":'PHP'}
    ]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)

// $nor 都不 - 同时不满足条件的
db.workmate.find(
    {$nor:[
        {age:{$gte:30}},//小于30岁 并且不会PHP的
        {"skill.skillThree":'PHP'}
    ]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)

// $not 匹配除了条件以外的
db.workmate.find(
    {
        age:{
            $not:{
                $lte:30,
                $gte:20
            }
        }
    },
    {name:1,age:1,_id:0}
)