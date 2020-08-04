// 隐藏内部实现

// 更合理的写法
// foo(2)
// function foo(a) {
//     var b
//     b = a + bar(a * 2)
//     console.log(b * 3)
//     function bar(a) {
//         return a - 1
//     }
// }

// 规避冲突
foo()
function foo() {

    function bar(a) {
        var i = 3
        console.log(a + i)
    }

    for (var i = 0; i < 10; i++) {
        bar(i * 2)
    }
}




