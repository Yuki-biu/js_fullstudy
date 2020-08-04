// 5!

// function foo(i) {
//     let res = 1
//     while (i > 0) {
//         res *= i
//         i--
//     }
//     return res
// }

// function mul(n) {   // 找出口
//     if (1 == n) {
//         return 1
//     }
//     return n *= mul(n - 1)  // 找规律
// }

// console.log(mul(5))


// 斐波那契数列
function fb(n) {
    if (n == 1 || n == 2) {
        return 1
    }
    return fb(n - 1) + fb(n - 2)
}
console.log(fb(5))


// function hanoi(n, a, b, c) {

// }


