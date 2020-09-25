Function.prototype.myBind = function (context) {
    if(typeof this !== 'function') {
        throw new TypeError('error')
    }
    
    // 拿到参数
    const args = [...arguments].slice(1)
    // const args = Array.prototype.slice.call(arguments, 1)
    const self = this
    // 定义一个函数，用来保存原函数的原型
    const original = function() {}
    // 绑定的函数
    const bound = function() {
        // this instanceof original, 判断是否用new来调用bound
        return self.apply(this instanceof original ? this : context, args.concat(Array.prototype.slice.call(arguments)))
    }

    if(this.prototype) {
        original.prototype = this.prototype
    }

    // 修改绑定函数的原型指向
    bound.prototype = new original()
    return bound
}

fn.myBind(obj)