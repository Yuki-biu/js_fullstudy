// function identify() {
//     // console.log(this)
//     return this.name.toUpperCase()
// }

// function speak() {
//     // console.log(this)
//     let greeting = "Hello, I'm " + identify.call(this)
//     console.log(greeting)
// }

// let me = {
//     name: 'yuki'
// }

// let you = {
//     name: 'kevin'
// }

// // console.log(identify.call(me))
// speak.call(me)



// this所处的词法作用域在哪里生效，this作用域就指向哪里

// function foo() {
//     let person = {
//         name: 'wn',
//         age: 18
//     }
//     console.log(this)   // window
// }
// function bar() {
//     let person = {
//         name: 'wnn',
//         age: 19
//     }
//     foo()
// }
// bar()



// function foo() {
//     console.log(this.a)
// }
// var a = 2
// foo()



// function foo() {
//     console.log(this.a) // 2
// }
// var a = 2;

// (function() {
//     "use strict"
//     foo()   // 严格模式下的foo的调用与位置无关
// })()



// function foo() {
//     console.log(this.a)
// }

// var obj2 = {
//     a: 3,
//     foo: foo
// }
// var obj1 = {
//     a: 2,
//     obj2: obj2
// }

// obj1.obj2.foo()   // 此时foo指向的是obj




// function foo() {
//     console.log(this.a)
// }

// var obj = {
//     a: 2,
//     foo: foo
// }
// var bar = obj.foo
// var a = "hello"
// bar()



// function foo() {
//     console.log(this.a) // hello
// }
// function doFoo(fn) {
//     fn()
// }

// var obj = {
//     a: 2,
//     foo: foo()
// }
// var a = "hello"
// doFoo(obj.foo)
// var bar = obj.foo
// console.log(bar)


function foo() {
    console.log(this.a)
}
var obj = {
    a: 2,
    foo: foo
}
var a = "global"
var bar = obj.foo()
console.log(bar)

