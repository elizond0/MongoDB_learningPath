// mongoDB用户管理

// 创建用户(角色)
db.createUser({
    user:"hector",
    pwd:"123456",
    customData:{
        name:"elizondo",
        email:"397485549@qq.com",
        age:18
    },
    roles:[
        {
            role:"readWrite",
            db:"company"
        },
        'read'
    ]
})

// 查看用户(角色)
db.system.users.find()

// 删除用户(角色)
db.system.users.remove({user:"hector"})

// 鉴权,需要重启服务使设置生效
// 如果正确返回1，如果错误返回0。（Error：Authentication failed。
db.auth("hector","123456")//用户名,密码

// 启动数据库 $ mongod --auth
// 连接数据库 $ mongo -u hector -p 123456 127.0.0.1:27017/admin

