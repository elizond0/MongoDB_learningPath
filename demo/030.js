var userName='abc'
var timeStamp=Date.parse(new Date())//时间戳
var jsonDatabase={'loginName':userName,'loginTime':timeStamp}
var db=connect('log')//use log 使用log库
db.login.insert(jsonDatabase)

print('print success')







