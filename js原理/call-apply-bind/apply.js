Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    // apply要求传入的参数是数组
    const args = arguments[1]
    const fn = Symbol('fn')
    context[fn] = this

    const result = context[fn](...args)

    delete context[fn]

    return result
}

var obj = {
    name: 'wn'
}

name = 'wnn'

function fn() {
    console.log(this.name)
}

fn.myApply(obj)