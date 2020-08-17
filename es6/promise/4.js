function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aaa')
            resolve('a')
        }, 1500)
    })
    
}
function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bbb')
            reject('b')
        }, 1000)
    })
}
function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ccc')
            resolve('c')
        }, 500)
    })
}
function d() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ddd')
            resolve('d')
        }, 500)
    })
}

// Promise pending(进行中) resolved(已成功) reject(已失败)
// 无论promise是什么状态，都会走进finally
a().then(b).catch(c).finally(d)