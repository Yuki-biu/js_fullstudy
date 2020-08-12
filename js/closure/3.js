// 实现一个函数执行出来的结果都是累加的
// var count = 0
// function test() {
//     count ++
//     console.log(count)
// }
// test()
// test()


// 不依赖外部变量实现累加功能
// 函数内没有一个始终固定不变的变量
// 每次重新执行函数都会初始化函数内的所有东西

function test() {
	var count = 0
    function add() {
    	count ++
        console.log(count)
    }
    return add
}
var result = test()
result()
result()

