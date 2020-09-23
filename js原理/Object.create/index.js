// Object.create的实现原理

// 所有的对象都有原型？
// 错 利用Object.create()创建出的对象可能没有原型

let a = { b: 1 }

let c = Object.create(a)

function created(obj) {
    if (typeof obj != 'object') { throw TypeError }
    function Ctor() {}
    Ctor.prototype = obj
    let newObj = new Ctor()
    return newObj

    // return {
    //     __proto__ : obj
    // }
}

