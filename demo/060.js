// 应答式命令

// db.workmate.update({age:18},{$set:{money:1000}},false,true) // false 是upsert选项,存在数据则不修改;true 是 multi选项,贪婪匹配;
// var resultMessage=db.runCommand({getLastError:1})// getLastError:1 表示 返回功能错误
// if(resultMessage.updateExisting){
// //安全地进行下一步操作,
// }
// printjson(resultMessage);//打印json格式

// findAndModify
var myModify={
    findAndModify:"workmate",//要修改哪个集合 collection
    query:{name:'abc1'},//查找条件
    update:{$set:{age:30}},//修改操作,remove与update不可共存
    new:true, //返回修改后的值
    // fields：//需要返回的字段
    // upsert：//没有这个值是否增加
    // sort:   //进行排序
    // remove：[boolean]是否删除查找到的文档，值填写true，可以删除。与update不可共存
}

var resultMessage=db.runCommand(myModify);
printjson(resultMessage)