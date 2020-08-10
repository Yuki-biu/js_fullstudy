## 默认绑定
this所处的词法作用域在哪里生效，this作用域就指向哪里<br>
在严格模式下 全局对象无法进行默认绑定 所以导致this只能绑定在undefined上<br>

## 隐式绑定
当函数引用有上下文对象时 隐式绑定的规则就会把函数调用中的this绑定到这个上下文对象上

## 隐式丢失
隐式绑定的函数会丢失绑定对象 也就是说 它会应用默认绑定 

## 显式绑定
call apply bind <br>
如果call和apply的第一个参数写的是null 那么this指向的是window
.call() 传参 => a.call(obj, 1, 2)<br>
.apply() 传参 => a.apply(obj, [1, 2])<br>
.bind() 返回的是函数
