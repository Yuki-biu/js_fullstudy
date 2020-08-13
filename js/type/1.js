// String Boolean Number undefined Null Object

// var a = 1
// var b = new Number(1)

// 原始值转布尔值
// console.log(Boolean())  // false
// console.log(Boolean(false))  // false
// console.log(Boolean(undefined))  // false
// console.log(Boolean(null))  // false
// console.log(Boolean(0))  // false
// console.log(Boolean(-0))  // false
// console.log(Boolean(+0))  // false
// console.log(Boolean(1))  // true
// console.log(Boolean(""))  // false
// console.log(Boolean("123"))  // true
// console.log(Boolean(NaN))  // false
// console.log(Boolean(-1))  // true


// 原始值转数字
// console.log(Number())   // 0
// console.log(Number(undefined))   // NaN
// console.log(Number(null))   // 0
// console.log(Number(true))   // 1
// console.log(Number(false))   // 0
// console.log(Number('123'))   // 123
// console.log(Number('-123'))   // -123
// console.log(Number('000123'))   // 123
// console.log(Number('-000123'))   // -123
// console.log(Number('123 123'))   // NaN
// console.log(Number(''))   // 0
// console.log(Number('100a'))   // NaN

// parseInt()  // 解析整数
// parseFloat()    // 解析整数和浮点数


// 转String
// console.log(String())   // ''
// console.log(String(undefined))  // 'undefined'
// console.log(String(null))   // 'null'
// console.log(String(false))  // 'false'
// console.log(String(true))   // 'true'
// console.log(String(0))  // '0'
// console.log(String(-0)) // '0'
// console.log(String(NaN))    // 'NaN
// console.log(String(1))  // '1'


// 原始值转对象
// 原始值通过调用 String() Number() 或者 Boolean() 构造函数，转换为他们各自的包装对象
// var a = 'aaa'
// console.log(typeof a)   // string
// var b = new Number(a)
// console.log(typeof b)   // object


// 对象转布尔值
// console.log(typeof Boolean(new Boolean(false))) // boolean

// 对象转字符串和数字
// toString & valueof
// var a = {
//     b: 1
// }
// console.log(a.toString())   // [object Object]








