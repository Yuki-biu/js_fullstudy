// let obj = {
//     name: 'a',
//     age: 18,
//     sex: 'man'
// }

// const m = new Map()
// console.log(m)
// m.set(obj, 'content')
// console.log(m)  // Map { { name: 'a', age: 18, sex: 'man' } => 'content' }
// console.log(m.get(obj))
// console.log(m.has(obj))
// m.delete(obj)
// console.log(m.has(obj))

// const map = new Map([
//     ['name', 'b'],
//     ['age', 18]
// ])
// console.log(map.size)
// console.log(map.get('name'))

// const item = [
//     ['name', 'b'],
//     ['age', 18]
// ]
// const map = new Map()
// item.forEach((key, value) => {
//     // console.log(key, value)
//     map.set(key, value)
// })
// console.log(map)

// const set = new Set([
//     ['foo', 1],
//     ['bar', 2]
// ])
// console.log(set)    //Set { [ 'foo', 1 ], [ 'bar', 2 ] }
// const m = new Map(set)
// console.log(m)

// const m = new Map()
// const k1 = ['a']
// const k2 = ['a']
// m.set(k1, 111).set(k2, 222) // k1 和 k2 值相同，在Map中也被认为是两个键
// console.log(m.has(k1))


// const m = new Map()
// m.set(-0, 123)  // 0, -0, +0 默认是一个键
// m.set(+0, 223)
// console.log(m)

// const m = new Map()
// m.set(undefined, 2) // undefined 默认是一个键
// m.set(undefined, 2)
// m.set(null, 3)  // null 默认是一个键
// m.set(null, 3)
// m.set(NaN, 4)   // NaN 默认是一个键
// m.set(NaN, 5)
// m.clear()
// console.log(m)

// const map = new Map([
//     ['foo', 'no'],
//     ['bar', 'yes']
// ])

// keys() 返回键名的遍历器
// values() 返回键值的遍历器
// entries() 返回成员的遍历器

// for( let key of map.keys()) {
//     console.log(key)
// }
// for( let value of map.values()) {
//     console.log(value)
// }
// for( let value of map.entries()) {
//     console.log(value)
// }
// map.forEach((e) => {
//     console.log(e)
// })

// const k = [...map.keys()]
// const val = [...map.values()]
// const entr = [...map.entries()]
// const m = [...map]
// console.log(k)   // [ 'foo', 'bar' ]
// console.log(val)   // [ 'no', 'yes' ]
// console.log(entr) // [ [ 'foo', 'no' ], [ 'bar', 'yes' ] ]
// console.log(m)  // [ [ 'foo', 'no' ], [ 'bar', 'yes' ] ]
