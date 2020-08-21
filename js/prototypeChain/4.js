var num = 123
console.log(num.toString()) // '123'

// 方法重写

Object.prototype.toString = function() {
    return 'hhhhhhh'
}

function Person() {

}
var person = new Person()
console.log(person.toString())

