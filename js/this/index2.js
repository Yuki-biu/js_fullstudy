// function foo() {
//     console.log(this.a)
// }

// var obj = {
//     a: 2
// }

// foo.call(obj)   // 2
// foo.apply(obj)  // 2


// var a = {
//     user: 'wn',
//     fn: function(q, w) {
//         console.log(this.user)
//         console.log(q + w)
//     }
// }
// var b = a.fn
// b.apply(a)



var a = {
    user: 'wn',
    fn: function(q, w) {
        console.log(this.user)
    }
}
var b = a.fn
var c = b.bind(a)
c()
