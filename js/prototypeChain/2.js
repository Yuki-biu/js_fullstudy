Person.prototype = {
    name: 'min',
    sayName: function() {
        console.log(this.name)
    },
    height: 100
}

function Person() {
    this.name = 'yuan'
    this.eat = function() {
        this.height++
    }
}

var person = new Person()
// console.log(person.sayName)

person.eat()
console.log(person.height)  // 101
console.log(Person.prototype.height)    // 100
