// 数组去重
let array = [1, 1, '1', '1']    // [1, '1']

function unique(array) {
    // 1. 遍历每一个元素
    // 2. 找到不是重复项 放入 res 中
    // let res = [array[0]]
    // for(let i = 0; i < array.length; i++) {
    //     for(let j = 0; j < res.length; j++){
    //         if(array[i] === res[j]) {
    //             break;
    //         } else if (j === res.length - 1) {
    //             res.push(array[i])
    //         }
    //     }
    //     // 如果array[i]是唯一的 那么执行完循环 j = res.length
    // }
    // return res

    // for(let i = 0; i < array.length - 1; i++){
    //     for(let j = array.length - 1; j > i; j--){
    //         if(array[i] === array[j]) {
    //             array.splice(j, 1)
    //         }
    //     }
    // }
    // return array

}
console.log(unique(array))