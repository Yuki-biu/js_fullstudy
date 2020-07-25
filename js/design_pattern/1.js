// 20000 C 16
//       B 18
//       A 20

/**
 * 功能：计算年收益
 * @author xly
 * @date 2020-07-16
 * @params {salary 工资 number}
 * {level 评级 string}
 * @return 年收益 number
 */
function calculateBonus(salary, level = 'C') {
    // console.log(arguments)
    // if(arguments.length < 2) {  //传参错误
    //     throw new Error('传参不正确，请检查传递的工资及等级')
    // }

    salary = parseInt(salary)
    if(typeof salary != 'number' || salary < 0) { //工资非number类型或工资 < 0
        return "wrong salary"
    }
    if(['A', 'B', 'C', 'D', 'S'].indexOf(level) == -1 ) {
        return "wrong level"    //等级非string类型或输入等级不是ABCD
    }

    if(level == 'B') {
        return salary * 18
    } else if(level == 'A') {
        return salary * 20
    } else if(level == 'D') {
        return salary * 12
    } else if(level == 'S') {
        return salary * 100
    }

    return salary * 16
}

// console.log(typeof('a' *1))
console.log(calculateBonus('20000'))
