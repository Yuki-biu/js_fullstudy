var a = 10

function foo(a) {
    var b = a + 2

    function bar(c) {
        console.log(a, b, c)
    }

    bar(b * 3)
}

foo(2)
// console.log(b)  // => undefined


// 全局作用域下    foo
// foo作用域下  a b bar
// bar作用域下  c