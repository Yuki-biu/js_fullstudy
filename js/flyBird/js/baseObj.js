//功能性函数
var baseObj = {
    randomNum: function(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min) 
    }
}