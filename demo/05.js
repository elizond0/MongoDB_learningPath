var workmate1 = {
    name: 'abc1',
    age: 18,
    children: {
        a1: "a11",
        b1: "b11"
    },
    regeditTime: new Date()
}
var workmate2 = {
    name: 'abc2',
    age: 18,
    children: {
        a2: "a21",
        b2: "b21"
    },
    regeditTime: new Date()
}
var workmate3 = {
    name: 'abc3',
    age: 18,
    children: {
        a3: "a31",
        b3: "b31"
    },
    regeditTime: new Date()
}

// 批量插入
var db = connect('company')
var workmateArray = [workmate1, workmate2, workmate3]
db.workmate.insert(workmateArray)
print('[SUCCESS]: The data was inserted successfully.');