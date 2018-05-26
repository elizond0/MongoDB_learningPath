// 全文索引 插入长文本

db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

// 建立索引
// db.info.ensureIndex({contextInfo:'text'})

// 查找全文索引
// 默认规则: 空格间隔两条查询关键字  满足任一条件即显示
// 关键字前使用 "-" 屏蔽关键字
// db.info.find({$text:{$search:"life PlayGame -drink"}}) 

// 使用' \" '转义符 精确查找2个以空格间隔的单词
// db.info.find({$text:{$search:' \"love life\" '}})