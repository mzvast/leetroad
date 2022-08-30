// https://www.zhihu.com/question/66851503/answer/2440309314

type Flag = 'Placement' | 'Deletion';

interface VNode {
    key: string;
    flag?: Flag;
    index?: number;
}
type VNodeList = VNode[];
function diff(before: VNodeList, after: VNodeList): VNodeList {
    const result: VNodeList = [];

    // ...遍历前的准备工作
    // 将before保存在map中
    const beforeMap = new Map<string, VNode>();
    before.forEach((node, i) => {
        node.index = i;
        beforeMap.set(node.key, node);
    });

    // 遍历到的最后一个可复用node在before中的index
    let lastPlacedIndex = 0;

    for (let i = 0; i < after.length; i++) {
        // ...核心遍历逻辑
        const afterNode = after[i];
        afterNode.index = i;
        const beforeNode = beforeMap.get(afterNode.key);

        if (beforeNode) {
            // 存在可复用node
            // 从map中剔除该 可复用node
            beforeMap.delete(beforeNode.key);

            const oldIndex = beforeNode.index as number;

            // 核心判断逻辑
            if (oldIndex < lastPlacedIndex) {
                // 移动
                afterNode.flag = 'Placement';
                result.push(afterNode);
                continue;
            } else {
                // 不移动
                lastPlacedIndex = oldIndex;
            }
        } else {
            // 不存在可复用node，这是一个新节点
            afterNode.flag = 'Placement';
            result.push(afterNode);
        }
    }

    // ...遍历后的收尾工作
    beforeMap.forEach((node) => {
        node.flag = 'Deletion';
        result.push(node);
    });

    return result;
}

// const before = [{key: 'a'}];
// // 更新后
// const after = [{key: 'd'}];

// 更新前
const before = [{key: 'a'}, {key: 'b'}, {key: 'c'}];
// 更新后
const after = [{key: 'b'}, {key: 'a'}];
console.log(diff(before, after));
