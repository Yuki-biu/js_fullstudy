// 一元操作符 +
// console.log(1 + '1')    // '11'
// 为什么可以运算？
// 在js中存在自动类型转换 隐式类型转换 将 1 => '1'  --> '1' + '1'

// console.log(+'1')   // 1  window内操作台运行
// + ToNumber   Number('1')


// ToPrimitive(input, [preferredType])
// input 表示要处理的值
// preferredType 非必填 表示希望转换成的类型 只有 Number和 String 默认为 String

// ToPrimitive(obj, Number)
// 1. 如果obj是基本类型，直接返回
// 2. 否则，调用valueof，如果返回一个原始值，则js将其返回
// 3. 否则，调用toString，如果返回一个原始值，则js将其返回
// 4. 否则，js抛出一个类型错误异常

// ToPrimitive(obj, String)
// 1. 如果obj是基本类型，直接返回
// 2. 否则，调用toString，如果返回一个原始值，则js将其返回
// 3. 否则，调用valueof，如果返回一个原始值，则js将其返回
// 4. 否则，js抛出一个类型错误异常

// console.log(+['1', '2', '3'])
// console.log(+{})    // NaN




