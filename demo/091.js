// 基本数组匹配  完全匹配,顺序不同也无法匹配
db.workmate.find(
    {interest:['画画','聚会','看电影']},//数组完全匹配,顺序不同也无法匹配
    {name:1,interest:1,age:1,_id:0}
)

// $all 匹配数组中同时符合条件的,顺序无影响
db.workmate.find(
    {interest:{$all:['聚会','画画']}},
    {name:1,interest:1,age:1,_id:0}
)

// $in 匹配数组中符合条件之一的,顺序无影响
db.workmate.find(
    {interest:{$in:['聚会','画画']}},
    {name:1,interest:1,age:1,_id:0}
)

// $size 匹配数组长度
db.workmate.find(
    {interest:{$size:5}},
    {name:1,interest:1,age:1,_id:0}
)

// $slice 显示匹配项的前NUMBER项,支持负值(倒数),数组
db.workmate.find(
    {interest:{$size:3}},
    {name:1,interest:{$slice:1},age:1,_id:0}//只显示interest的第一项
)