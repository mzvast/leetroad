// 前分位分割
// https://www.codingem.com/comma-thousand-separator-in-javascript/
console.log(format('123456.3456')); // 123,456.3456
console.log(format('1234567.3456')); // 1,234,567.3456
console.log(format('1234567')); // 1,234,567

function format(str) {
    // 小数点后面不处理
    const [num, dec] = str.split('.');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (dec ? '.' + dec : '');
    // 本质上是要匹配分界位置
    // \B 非单词边界
    // (?=)后瞻断言
    // \d{3} 3个数字
    // (?!\d)后瞻负向断言，后面不能是数字 
}
