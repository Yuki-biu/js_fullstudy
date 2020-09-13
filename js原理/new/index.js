// new的实现原理
function myNew() {
    // 创建一个实例对象
    let obj = {}
    // 取到外部传进来的构造器
    let Constructor = Array.prototype.shift.call(arguments)
    // 实现继承，要实例可以访问构造器的属性
    obj.__proto__ = Constructor.prototype
    // 调用构造器 改变其this指向到实例
    let res = Constructor(obj, arguments)
    return typeof res == 'object' && res != null ? res : obj
}

const Test = function(name) {
    this.name = name
}

let newObj = myNew(Test, '1212')