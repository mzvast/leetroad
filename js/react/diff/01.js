// 更新前
const before = [{key: 'a'}];
// 更新后
const after = [{key: 'd'}];
// diff(before, after)
const ans = [({key: 'd', flag: 'Placement'}, {key: 'a', flag: 'Deletion'})];
