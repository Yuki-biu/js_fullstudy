//功能性函数
var baseObj = {
    // 随机数
    randomNum: function(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min) 
    },

    // 判断两个矩形是否发生碰撞
    rectangleCrashExamine: function(obj1, obj2) {
        var obj1Left = obj1.offsetLeft
        var obj1Right = obj1.offsetWidth + obj1.offsetLeft
        var obj1Top = obj1.offsetTop
        var obj1Bottom = obj1.offsetTop + obj1.offsetHeight

        var obj2Left = obj2.offsetLeft
        var obj2Right = obj2.offsetWidth + obj2.offsetLeft
        var obj2Top = obj2.offsetTop
        var obj2Bottom = obj2.offsetTop + obj2.offsetHeight

        // console.log(obj1, obj2)

        if ( !(obj1Left > obj2Right || obj1Right < obj2Left || obj1Top > obj2Bottom || obj1Bottom < obj2Top) ) {
            return true
        }
        return false
    }
}