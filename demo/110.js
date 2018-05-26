// 构造百万级数据

// 生成随机数 
function GetRandomNumber(min,max){
    let range=max-min
    let random=Math.random()
    return (min+Math.round(random*range))
}
// console.log(GetRandomNumber(2,6))

// 生成随机用户名
function GetRandomUsername(min,max){
    let tmpStringArray="123456789qwertyuiopasdfghjklzxcvbnm".split("")
    let outputText=""
    for(let i=1;i<GetRandomNumber(min,max);i++){
        outputText=outputText+tmpStringArray[GetRandomNumber(0,tmpStringArray.length)]
    }
    return outputText
}
// console.log(GetRandomUsername(6,12))

// 生成数据
function generatorData(num){
    var temoInfo=[]
    for(let i=0;i<num;i++){ 
        temoInfo.push({
            username:GetRandomUsername(6,12),
            regeditTime:new Date(),
            randomNum0:GetRandomNumber(10000,99999),
            randomNum1:GetRandomNumber(10000,99999),
            randomNum2:GetRandomNumber(10000,99999),
            randomNum3:GetRandomNumber(10000,99999),
            randomNum4:GetRandomNumber(10000,99999),
            randomNum5:GetRandomNumber(10000,99999),
            randomNum6:GetRandomNumber(10000,99999),
            randomNum7:GetRandomNumber(10000,99999),
            randomNum8:GetRandomNumber(10000,99999),
            randomNum9:GetRandomNumber(10000,99999),
        })
    }
    return temoInfo
}

// 批量插入
var startTime=(new Date()).getTime()

var db=connect('company')
db.randomInfo.drop()
db.randomInfo.insert(generatorData(2000000))

var endTime=(new Date()).getTime()-startTime

print("数据构建成功---------- "+endTime+" (ms)")
// 数据构建成功---------- 75915 (ms)
// db.randomInfo.stats()可以查看数据条数