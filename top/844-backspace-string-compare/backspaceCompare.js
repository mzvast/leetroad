/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let arrS = [];
    let arrT = [];
    for (let x of s) {
        if (x === '#') arrS.pop();
        else arrS.push(x);
    }

    for (let x of t) {
        if (x === '#') arrT.pop();
        else arrT.push(x);
    }
    if (arrS.length !== arrT.length) return false;
    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i] !== arrT[i]) return false;
    }
    return true;
};
