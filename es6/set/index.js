// set 类似于数组，但是不一样的地方是set这种数据结构内部的成员是唯一值

// const s = new Set() //类数组
// console.log(s)

// let arr = [2, 3, 4, 1, 3, 2, 5]
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// for(let item of arr) {
//     console.log(item)
// }
// arr.forEach((x) => {    //只有数组有forEach
//     // console.log(x)
//     s.add(x)
// })
// console.log(s)

// const set = new Set([1, 2, 3, 4, 4, 5, 5])
// const set = new Set(arr)
// console.log(set.size)

// 数组去重
// let arr = [2, 3, 4, 1, 3, 2, 5]
// console.log([...new Set(arr)])

// console.log([...new Set('abcdca')]) // [ 'a', 'b', 'c', 'd' ]

// let s = new Set([5, '5'])
// console.log(s)

// let set = new Set()
// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)
// console.log(set)

// let set = new Set()
// let a = {}
// let b = {}
// set.add(a)
// set.add(b)
// console.log(set)

// const set = new Set()
// set.add(1).add(2).add(3)
// set.delete(2)
// set.clear()
// console.log(set)

// let arr = [2, 3, 4, 1, 3, 2, 5]
// console.log(arr.includes(4))

// const set = new Set([1, 2, 3, 4])
// const arr = Array.from(set)
// arr.forEach(e => {
//     console.log(e)
// })

// 数组去重
// function dedupe(array) {
//     return array = Array.from([...new Set(array)])
// }
// console.log(dedupe([1, 2, 2, 3, 3]))

// set 遍历
let set = new Set(['red', 'green', 'blue'])
// let set = new Set()
// set.add({name: 'a'})
// set.add({age: 18})
// set.add({sex: 'boy'})


// keys() 是set 结构中的返回键名的遍历器
// values() 是set 结构中的返回值的遍历器
// entries() 是set 结构中的返回键值对的遍历器
// for(let item of set.keys()) {
//     console.log(item)
// }
// for(let item of set.values()) {
//     console.log(item)
// }
for(let item of set.entries()) {
    console.log(item)
}



