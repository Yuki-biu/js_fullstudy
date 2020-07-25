// JSON 对象
// 策略模式
// 

// 对象字面量
// 工资发放策略
var strategies = {
    'S': function(salary) {
        return 100 * salary
    },
    'A': function(salary) {
        return 20 * salary
    },
    'B': function(salary) {
        return 18 * salary
    },
    'C': function(salary) {
        return 16 * salary
    },
    'D': function(salary) {
        return 12 * salary
    }
}

function calculateBonus(salary, level = 'C') {
    console.log(strategies[level])
    console.log(strategies[level](salary))
    return strategies[level](salary)
}

console.log(calculateBonus(20000)) 




