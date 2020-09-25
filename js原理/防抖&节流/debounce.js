// 在规定的时间delay内未触发func第二次则执行
function debounce(func, delay) {
    // 利用闭包存储定时器
    let timer = null
    return function() {
        // 在规定时间内再次触发会清楚定时器后重新设置
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, arguments)
        }, delay)
    }
}

window.onscroll = debounce(function() {
    console.log('scroll')
}, 1000)