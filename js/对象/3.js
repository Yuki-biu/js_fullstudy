// 包装类
// 创建number字面量
// var num = 123
// num.abc = 'aaa'
// console.log(num)    // 123

// 创建number对象
// var num = new Number(123)
// num.abc = 'abc'

// console.log(num)    // [Number: 123] { abc: 'abc' }
// console.log(num*2)  // 246
// num 参与运算时变回数字 不参与运算时当作对象  （String和Boolean也行，null和undefined不行）


// 包装类
// var num = 4
// num.len = 3
// 隐式过程
// new Number(4).len = 3
// delete len
// new Number(4).len
// console.log(num.len)


// 考点
// var arr = [1, 2, 3, 4, 5]
// arr.length = 2
// console.log(arr)    // [1, 2]

// var str = 'abcd'
// str.length = 2
// console.log(str)    // abcd 原始类型
// 字符串对象天生就具备length属性



// 面试题
var str = 'abc'
str += 1
var test = typeof(str)
if (test.length == 6) {
    test.sign = 'typeof的返回结果可能为String'
}
console.log(test.sign)  
// undefined?

