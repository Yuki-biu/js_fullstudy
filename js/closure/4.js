// function test() {
//     var food = 'apple'

//     function a() {
//         console.log(food)
//         food = 'banana'
//     }

//     function b() {
//         console.log(food)
//     }
// }

// 想一个办法return a()和b()
function fruit() {
    var food = 'apple'
    var obj = {
        eatFruit: function () {
            if (food != '') {
                console.log('I am eating ' + food)
                food = ''
            } else {
                console.log('There is nothing')
            }
        },
        pushFruit: function (myfood) {
            food = myfood
        }
    }
    return obj
}

// obj被存储在fruit()的AO中

var person = fruit()
person.eatFruit()
person.eatFruit()
person.pushFruit('grape')
person.eatFruit()

