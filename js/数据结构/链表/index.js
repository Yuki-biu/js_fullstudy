// 链表 线性结构 也是天然的递归结构 不能像数组一样随机读取
// 链表的结构可以充分利用计算机的内存空间，实现灵活的内存管理

// 单向链表
class Node {
    constructor(v, next) {
        this.value = v
        this.next = next
    }
}

class LinkList {
    constructor() {
        // 链表长度
        this.size = 0
        // 头部
        this.dummyNode = new Node(null, null)
    }
    // index 为要查找项
    find(header, index, currentIndex) {
        if(index === currentIndex) return header

        return this.find(header.next, index, currentIndex + 1)
    }

    addNode(v, index) {
        // 查找当前添加的元素的索引
        this.checkIndex(index)
        // 当往链表的末尾插入时，prev.next为空
        // 其他情况需要设置prev.next为插入的节点
        let prev = this.find(this.dummyNode, index, 0)
        prev.next = new Node(v, prev.next)
        this.size++
        return prev.next
    }

    insetNode(v, index) {
        return this.addNode(v, index)
    }

    addToFirst(v) {
        return this.addNode(v, 0)
    }

    addToLast(v) {
        return this.addNode(v, this.size)
    }

    checkIndex(index) {
        if (index < 0 || index > this.size) {
            throw Error('index error')
        }
    }

    removeNode(v, index) {
        // 查找当前添加的元素的索引
        this.checkIndex(index)
        index = isLast ? index - 1: index
        let prev = this.find(this.dummyNode, index, 0)
        let node = prev.next
        prev.next = node.next
        node.next = null
        this.size--
        return node
    }
}



// leetcode 剑指offer 18.

