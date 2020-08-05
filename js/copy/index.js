// 什么是拷贝？深拷贝 & 浅拷贝

// 浅拷贝 复制内存地址指针的操作叫浅拷贝
// let a = { age: 1 }
// let b = a
// a.age = 2
// console.log(b)  // { age: 2 }


// 深拷贝 创建新地址 使指针指向该深拷贝 （不受原数据赋值影响）
// Object.assign()
let a = { age: 1 }
let b = Object.assign({}, a)
console.log(b)
a.age = 2
console.log(b)



