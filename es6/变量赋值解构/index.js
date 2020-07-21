// let a = 1
// let b = 2
// let c = 3

// let [a, b, c] = [1, 2, 3]

// let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(bar)    // 2

// let [, , third] = ['a', 'b', 'c']
// console.log(third)  // c

// let [x, y] = [1, 2, 3]
// x = 1, y = 2

// let [head, ...tail] = [1, 2, 3, 4]
// console.log(tail)    // [2, 3, 4]

// let [a, b, ...c] = ['hello']
// console.log(a)  // hello
// console.log(b)  // undefined 解构不成功
// console.log(c)  // [] 解构符

// let [foo] = []
// console.log(foo)    //undefined

// let [foo = true] = []
// console.log(foo)    //true

// let [x, y = 'aaa'] = ['a', undefined]
// undefined 解构出来默认赋值是不成功的
// console.log(x, y)   // x -> a, y -> aaa

// let [x, y = 'aaa'] = ['a', null]
// null 解构出来赋值成功
// console.log(x, y)   // x -> a, y -> null

// let [x = 1, y = x] = [2]
// console.log(x, y)   // x -> 2, y -> 2

//对象解构
// let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
// console.log(foo, bar)   // foo -> aaa, bar -> bbb

// let {foo, bar} = {q: 'aaa', w: 'bbb'}
// console.log(foo, bar)   // foo -> undefined, bar -> undefined

// let obj = {
//     name: 'a',
//     age: 18
// }
// let {name, age} = obj
// console.log(name, age)  //name -> a, age -> 18

// let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
// foo 是匹配模式，baz 才是变量
// console.log(foo)    // not defined
// console.log(baz)    // aaa

// let obj = {
//     name: 'b',
//     desc: {
//         alone: false,
//         age: 20,
//         sanwei: [50, 100, 120] 
//     }
// }
// let {name, desc:{alone, age, sanwei:[x, y, z]}} = obj
// console.log(name, alone, age, x, y, z)

// let x
// ({x} = {x: 1})
// console.log(x)  // x -> 1
// 已经声明好的变量再进行解构时需要加()

// 字符串解构
// let [a, b, c, d, e] = 'hello'
// console.log(d)
// let {length: len} = 'hello'
// console.log(len)    // 5



