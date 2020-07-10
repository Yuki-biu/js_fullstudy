/* 对象是由方法和属性构成 语法
1. 构建一只鸭子
2. 招募1000只鸭子
3. 告诉国王你完成任务了 */

// JSON Object 对象字面量 literal object
var duck = {
    type:'周黑鸭',
    yz:99,
    duckSing: function() {
        console.log('嘎嘎嘎')
    }
}

var jiajun = {
    name:'假装是一只鸭子',
    duckSing: function() {
        console.log('嘎嘎嘎')
    }
}

var xyl = {
    name:'第二只假的'
}

const xgg = [jiajun,xyl];

// JS 中有array类型吗
// 数据类型：数值类型number 字符串string 布尔值boolean null undefined
// undefined
var cherrio  // 关键字 标识符    
// console.log(cherrio) //undefined
// console.log(typeof cherrio) //undefined
// 变量的类型由值来决定
cherrio = []
// console.log(cherrio)  // []
// 基础类型中不包括array array只是object的子类型
// console.log(typeof cherrio) //object array

for(var i = 0; i < 999; i++){
    cherrio.push(duck)
}

for(var i = 0; i < xgg.length; i++){
    if(typeof xgg[i].duckSing == 'function'){
        cherrio.push(xgg[i])
    }
}

if(cherrio.length == 1000){
    console.log('已招募完成，报告国王')
}

// duck.duckSing()

for(let singer of cherrio){  // es6
    singer.duckSing()
}
