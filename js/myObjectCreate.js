function myObjectCreate(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

let ans = myObjectCreate({a: 1});
console.log(ans.a);
