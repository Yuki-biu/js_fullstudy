
// Person.prototype = {} -- 原型 函数被定义出来就天生具备的属性

Person.prototype.name = 'jiajun'
Person.prototype.say = function() {
    console.log('giao')
}

function Person() {
    // this.name = 'wn'
}

var person = new Person()
console.log(person.name)    // 从原型上继承

var person1 = new Person()
console.log(person1.name)
person.say()
