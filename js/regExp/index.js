// 正则的定义
// let patt1 = new RegExp("hello")
// let patt2 = /word/
// 正则的使用 test()
// let pat = /my/
// let str = "this is my code..."

// let arr = str.split(" ")
// console.log(arr.indexOf('my'))

// console.log(pat.test(str))

// let pat = /hello/
// let msg = 'oh hello word'
// console.log(pat.exec(msg))

// 正则表达式的类型
// /pattern/attributes     g i 全局匹配/区分大小写匹配
// 不区分大小写
// let str = 'Visit NanChang oh my world'
// let pat = /nanchang/
// console.log(pat.test(str))  // false
// let pat = /nanchang/i   // 区分大小写
// console.log(pat.test(str))  // true
// let pat2 = /NanChang/g  // 全局匹配
// console.log(pat2.test(str))

// 字符串的正则
// let str = 'Visit W3Cschool'
// console.log(str.search(/w3cschool/i))

// let str = '1 plus 2 equl 3'
// console.log(str.match(/\d+/g))

// let str = "hello, pop! oh I am Hunger"
// console.log(str.replace(/pop/, "Pipi"))

// console.log(str.split(/\s+/))


// 正则写法
// [abc] 查找 [] 之间的任何字符
// let str = "Is this all there?"
// let pat = /[a-h]/g
// console.log(str.match(pat))
// [^abc] 查找任何不在 [] 之间的字符
// let pat = /[^a-h]/g
// console.log(str.match(pat))

// let str = "ABC XYZ abc xyz"
// let pat = /[C-b]/g
// console.log(str.match(pat))

// let str = "That's hot!"
// let pat = /h.t/g
// console.log(str.match(pat))


// 匹配手机号正则
let tel = '17826864511'

let pat = /^1[3-9](\d{9}$)/

console.log(pat.test(tel))

let email = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/



