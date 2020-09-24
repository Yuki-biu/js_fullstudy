// 栈 线性结构
// 特点：只在某一端添加或删除数据，遵循先进后出的原则

class Stack {
    constructor() {
        this.stack = []
    }
    push(item) {
        this.stack.push(item)
    }
    pop() {
        this.stack.pop()
    }
    peek() {
        return this.stack[this.getCount() - 1]
    }
    getCount() {
        return this.stack.length
    }
    isEmpty() {
        return this.getCount === 0
    }
}

let stack = new Stack() // { stack:[] }



// leetcode 20

var isValid = function(s) {
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    }

    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < 0) {    // 如果是左括号，直接存入数组中
            stack.push(s[i])
        } else {    // 当循环中出现右括号时，需将数组中最后一个元素取出与之匹配
            let last = stack.pop()
            if (map[last] + map[s[i]] != 0) {
                return false
            }
        }
    }
}
