let data = [
    {
        value: '123123',
        time: 5,
        color: 'red',
        speed: 1,
        fontSize: 22
    }, {
        value: '321321',
        time: 8
    }, {
        value: '213213',
        time: 12,
        color: '#b45abd',
        speed: 3,
        fontSize: 36
    }, {
        value: '321321',
        time: 16,
        color: '#f0f0f0',
        speed: 2,
        fontSize: 28
    }, {
        value: '213213',
        time: 22,
    }
]

// 获取所有需要的DOM元素
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

// 创建CanvasBarrage类
class CanvasBarrage {
    constructor (canvas, video, opts = {}) {    // 构造器 constructor是一种用于创建和初始化class对象的特殊方法
        // opts = {} 是为了防止未传入opts时报错 es6的语法
        if (!canvas || !video) return   // 未传入canvas和video时直接return

        // 将传入的参数挂载到this上 安插到这个类中
        this.video = video
        this.canvas = canvas
        // 设置canvas的宽高和video一致
        this.canvas.width = video.width
        this.canvas.height = video.height

        // 获取并操作canvas
        this.ctx = canvas.getContext('2d')

        // 设置默认参数，如果没传就带上
        let defOpts = {
            color: '#e91e63',
            speed: '1.5',
            opacity: '0.5',
            fontSize: 20,
            data: []
        }

        // 合并对象 再挂载到this上 后面的覆盖前面的
        Object.assign(this, defOpts, opts)

        // 添加属性 用来判断播放暂停 默认true为暂停
        this.isPaused = true
        // 得到所有的弹幕信息
        this.barrages = this.data.map(item => new Barrage(item, this))
    }
}

// 创建第二个类 Barrage 用来实例化每一条弹幕
class Barrage {
    constructor(obj, ctx) {
        this.value = obj.value  // 弹幕的内容
        this.time = obj.time    // 弹幕的出现时间
        // 把obj和ctx都挂载到this上方便获取
        this.obj = obj
        this.context = ctx
    }

    // 初始化弹幕
    init() {
        // 如果数据里没有涉及到这四种参数 直接取默认值
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.opacity = this.obj.opacity || this.context.opacity
        this.fontSize = this.obj.fontSize || this.context.fontSize

        // 计算每一条弹幕的宽度
        let p = document.createElement('p')
        p.style.fontSize = this.fontSize + 'px'
        p.innerHTML = this.value
        // 把p标签添加到body里 这样就可以拿到宽度
        document.body.appendChild(p)
        // 设置弹幕的宽度
        this.width = p.clientWidth
        // 得到弹幕宽度后 移除p标签
        document.body.removeChild(p)

        // 设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.random()

        // 做一下超出范围的处理
        if (this.y < this.fontSize) {
            this.y = this.fontSize
        } else if (this.y > this.context.canvas.height - this.fontSize) {
            this.y = this.context.canvas.height - this.fontSize
        }
    }
}

// 创建CanvasBarrage的实例
let canvasBarrage = new CanvasBarrage(canvas, video, {data})


