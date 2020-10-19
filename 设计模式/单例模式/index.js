// 保证一个类只有一个实例，并提供一个访问他的全局访问点

class SingleDog {
    show() {
        console.log('单例对象')
    }
    static getInstance() {
        // 判断是否被new过
        // if (!SingleDog.instance) {
        //     SingleDog.instance = new SingleDog()
        // }
        // return SingleDog.instance
        let instance = null
        return !function() {
            if (!instance) {
                instance = new SingleDog()
            }
            return instance
        }()
    }
}

const s1 = new SingleDog.getInstance()
const s2 = new SingleDog.getInstance()

// s1.getInstance()

s1 === s2  // true