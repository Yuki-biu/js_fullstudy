// 抽象工厂
// function Factory(name, age, career) {
//     let work
//     switch(career) {
//         case 'coder':
//             work = ['写代码', '写系统', '改bug']
//             break
//         case 'product manager':
//             work = ['订会议室', '做ppt', '催更']
//             break
//         case 'boss':
//             work = ['喝茶', '见客户', '看报']
//             break
//     }
//     return new User(name, age, career, work)
// }

class FakeStar extends MobilePhoneFactory {
    // 提供操作系统的接口
    createOS() {
        return new AndriodOS()
    }

    // 提供硬件的接口
    createHardware() {
        return new QualcommHardware()
    }
}

class OS {
    controlHardware() {
        throw new Error('需要重写')
    }
}

class AndriodOS extends OS{
    controlHardware() {
        console.log('Andriod操作系统')
    }
}

class AppleOS extends OS{
    controlHardware() {
        console.log('iOS操作系统')
    }
}

class Hardware {
    operateByOrder() {
        throw new Error('需要重写')
    }
}

class QualcommHardware extends Hardware {
    operateByOrder() {
        console.log('高通')
    }
}

class MiHardware extends Hardware {
    operateByOrder() {
        console.log('小米')
    }
}

// 这是我的手机
const myPhone = new FakeStar()
// 让它具备操作系统
const myOs = myPhone.createOS()
// 让它具备硬件
const myHardware = myPhone.createHardware()
// 启动操作系统
myOs.controlHardware()
// 唤醒操作系统
myHardware.operateByOrder()
