var startTime = (new Date()).getTime()
var db = connect('log')

// for (let i = 0; i < 1000; i++) { 
//     db.test.insert({
//         'num': 1
//     })
// }
//循环插入425ms

var tempArray=[]
for(let i=0;i<1000;i++){
    tempArray.push({'num':1})
}
db.test.insert(tempArray)
//数组批量插入17ms

var runTime = (new Date()).getTime() - startTime
print(runTime + 'ms')