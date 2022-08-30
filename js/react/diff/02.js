// 更新前
const before = [{key: 'a'}, {key: 'b'}, {key: 'c'}];
// 更新后
const after = [{key: 'c'}, {key: 'b'}, {key: 'a'}];

// diff(before, after) 输出
const ans = [
    {key: 'b', flag: 'Placement'},
    {key: 'a', flag: 'Placement'},
];
