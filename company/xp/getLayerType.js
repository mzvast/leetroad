// 现在有几种图层的ID 分别类型是1_xxx， 2_xxx,  xxx, 1_xxxs, 2_xxxE , xxxs
//xxx代表不同的字符串，以某种方式通过ID直接知道该图层的类型 请写一个function进行表述这种方式

function getType(layerId) {
    const typeRules = [
        {type: 'a', regex: /^1_.*[^sE]$/},
        {type: 'b', regex: /^2_.*[^sE]$/},
        {type: 'c', regex: /^.*[^sE]$/},
        {type: 'd', regex: /^1_.*s$/},
        {type: 'e', regex: /^2_.*E$/},
        {type: 'f', regex: /^.*s$/},
    ];

    for (const rule of typeRules) {
        if (rule.regex.test(layerId)) {
            return rule.type;
        }
    }

    return 'Unknown Type';
}

// tests
console.log(getType('1_xxx')); // a
console.log(getType('2_xxx')); // b
console.log(getType('xxx')); // c
console.log(getType('1_xxxs')); // d
console.log(getType('2_xxxE')); // e
console.log(getType('xxxs')); // f
