let xq = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('花一个礼拜相亲')
        resolve('成功')
    },1000)
})

xq.then((res) => {
    // console.log(res)
    if (res == '成功') {
        return marry()
    }
}).then((res) => {
    if (res == '成功') {
        return baby1()
    }
}).then((res) => {
    if (res == '成功') {
        return baby2()
    }
}).catch((err) => {
    console.log(err)
})


function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('结婚')
            resolve('成功')
            // baby1()
        },2000)
    })
}

function baby1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('baby1')
            reject('no')
            // baby2()
        }, 2000)
    })
    
}

function baby2() {
    setTimeout(() => {
        console.log('baby2')
    },3000)
}

