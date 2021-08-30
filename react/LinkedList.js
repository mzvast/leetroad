// 定义Node节点类型
function Node(name) {
    this.name = name;
    this.next = null;
}

// 链表
function LinkedList() {
    this.head = new Node('head');

    // 查找node节点的前一个节点
    this.findPrevious = function (node) {
        let current = this.head;
        while (current && current.next !== node) {
            current = current.next;
        }
        return current;
    };

    // 在node后插入新节点newElement
    this.insert = function (name, node) {
        let newNode = new Node(name);
        newNode.next = node.next;
        node.next = newNode;
    };

    // 删除节点
    this.remove = function (node) {
        const previousNode = this.findPrevious(node);
        if (previousNode) {
            previousNode.next = node.next;
        }
    };

    // 反转链表
    this.reverse = function () {
        let prev = null;
        let current = this.head;
        while (current) {
            let tempNode = current.next;
            current.next = prev;
            prev = current;
            current = tempNode;
        }
        this.head = current;
    };
}
