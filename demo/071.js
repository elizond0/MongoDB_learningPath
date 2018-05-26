// 需要复制到终端命令行中才能得到返回的结果,需要use company

db.workmate.find(
    {"skill.skillOne": 'HTML+CSS'}, //简单查找
    {name:1,"skill.skillOne":1,_id:0}// 显示以下字段:name和skill.skillOne,隐藏_id
)

db.workmate.find(
    {age:{$lte:30,$gte:25}},//年龄集合25~30岁之间
    {name:true,age:true,age:true,_id:false}
)

var startDate= new Date('06/05/2018');//月日年
db.workmate.find(
    {regeditTime:{$gt:startDate}},//查找注册日期晚于startDate的数据
    {name:true,age:true,"skill.skillOne":true,_id:false}
)
