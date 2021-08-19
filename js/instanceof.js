function instanceOf(a, b) {
    let ans = false;
    let cur = a;
    while (cur.__proto__) {
        if (cur.__proto__ === b.prototype) {
            return true;
        }
        cur = cur.__proto__;
    }
    return ans;
}

var B = function () {
	
}

var a = new B();
console.log(instanceOf(a, B))
