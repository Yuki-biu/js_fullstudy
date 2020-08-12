function test() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        (function (j) {
            arr[j] = function () {
                console.log(j)
            }
        })(i)
    }
    return arr
}

var myArr = test()
for (let i = 0; i < 10; i++) {
    myArr[i]()
}