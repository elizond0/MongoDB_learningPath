// 普通的update方法,较为繁琐
var db = connect('company')
// 首先要复制完整一条原数据,然后修改
var workmate3 = {
    name: 'abc3',
    age: 118,
    children: {
        a3: "a31",
        b3: "b31"
    },
    regeditTime: new Date()
}

db.workmate.update({name:"abc3"},workmate3)
print('[SUCCESS]: The data was updated successfully.');