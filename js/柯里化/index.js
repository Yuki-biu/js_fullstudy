function sum(a, b, c) {
    console.log(a + b + c)
}
// console.log(sum.length)

function curry(fn, len = fn.length) {
    // ...
    // fn(arguments)
    return _curry.call(this, fn, len)
}

function _curry(fn, len, ...args) {
    return function(...params) {
        let _args = [...args, ...params]
        if (_args.length >= len) {
            return fn.apply(this, _args)
        } else {
            return _curry.call(this, fn, len, ...args)
        }
    }
}

let _sum = curry(sum)

let A = _sum(1)
let B = A(2)
B(3)    // 6



function fn(a, b, c, d, e) {
    console.log(a, b, c, d, e)
}
let _fn = curry(fn)
_fn(1, 2, 3, 4, 5)  // 1, 2, 3, 4, 5
_fn(1)(2)(3, 4, 5)  // 1, 2, 3, 4, 5
_fn(1, 2)(3, 4)(5)  // 1, 2, 3, 4, 5
_fn(1)(2)(3)(4)(5)  // 1, 2, 3, 4, 5



// 降低函数的通用性，提高函数的适用性
function checkByRegExp(regExp, string) {
    return regExp.test(string)
}
let _check = curry(checkByRegExp)   // 柯里化
let checkCellPhone = _check(/^1\d{10}$/)
let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)

checkCellPhone('17826864511')
checkEmail('2195456050@qq.com')

// checkByRegExp(/^1\d{10}$/, '17826864511')   // 手机号码
// checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '2195456050@qq.com')



// let list = [
//     {
//         name: 'yihan',
//         age: 20
//     },
//     {
//         name: 'hufei',
//         age: 19
//     }
// ]
// let names = list.map(function(item) {
//     return item.name
// })
// // 柯里化
// let prop = curry(function(key, obj) {
//     return obj[key]
// })
// let names = list.map(prop('name'))

