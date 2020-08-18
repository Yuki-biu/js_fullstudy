// 构造函数
function Student(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    this.grade = 2017
}

var student = new Student('jiahao', 22, 'boy')
console.log(student)

function Person(name, age) {
    var that = {}
    that.name = name
    that.age = age
    return that
}
var person = Person('wn', 18) 
console.log(person) // 空对象

