// ## 实现instanceOf
function instanceOf(a, b) {
    let cur = a;
    while (cur?.__proto__) {
        if (cur.__proto__ == b.prototype) return true;
        cur = cur.__proto__;
    }
    return false;
}

var B = function () {};

var a = new B();
console.log(instanceOf(a, B));

/** 
 * 实例                         原型                            构造函数
 * 【inst】----.__proto__--->【prototype】 <----.prototype---- 【F】
 *                                         ----.constructor-->
 *
 *
 * */
