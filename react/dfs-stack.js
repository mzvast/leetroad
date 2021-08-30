// with stack
function Node() {
    this.name = '';
    this.children = [];
    // 因为要分辨探寻阶段和回溯阶段, 所以必须要一个属性来记录是否已经访问过该节点
    // 如果不打印探寻和回溯, 就不需要此属性
    this.visited = false;
}

function dfs(node) {
    const stack = [];
    stack.push(node);
    while ((node = stack[stack.length - 1])) {
        if (node.visited) {
            console.log('回溯阶段', node.name);
            stack.pop();
        } else {
            console.log('探寻阶段', node.name);
            node.visited = true;
            // 倒序推入stack
            for (let i = node.children.length - 1; i > 0; i--) {
                stack.push(node.children[i]);
            }
        }
    }
}
