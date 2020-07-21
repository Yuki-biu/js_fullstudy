var obj = {}

// console.log(name)

// var name = "张三"

//相当于
// var name
// name = "张三"

// var name //使用var定义的变量，会将定义代码提到首部（变量提升）

// console.log(name)
// let name = "皮皮"

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// console.log(i)

// var a = []
// var i
// for(i = 0; i < 10; i++){
//     a[i] = function() {
//         console.log(i)
//     }
// }
// a[6]()

// for(let i = 0; i < 3; i++){ //父作用域
//     let i = 'abc'   //子作用域
//     console.log(i)  //与子作用域同级，打印abc
// }

//暂时性死区
// var tmp = 123

// if (true) {
//     tmp = 'abc'
//     let tmp
// }

// var a = 'a'
// var a = 'aa'
// console.log(a)

// let b = 'b'
// let b = 'bb'
// console.log(b) 
// let不允许重复声明变量

//----------------------------------------
// const num = 1234
// num = 1000
// console.log(num)
// const声明的是常量

if(true) {
    console.log(age)
    const age = 18
}






