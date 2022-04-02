/**
 * 链表：
 * value是链表的结点，next是指向下一个链表的指针
 * 
 * 题目：写一个函数，输入一个链表，反转链表后输出
 */
const link = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}


// 方法一
function getNewLink(link) {
    let pre = null;
    let next = null;

    while (link) {
        next = link.next
        link.next = pre
        pre = link
        link = next
    }
    return pre
}


// 方法二
// 链表结点的构造函数
function Node(val) {
    this.value = val
    this.next = null
}

function reversList(link) {
    let linkList = []

    // 拿到所有结点的值
    while (link) {
        linkList.push(link.value)
        link = link.next
    }

    // 数组倒序
    linkList.reverse()

    // 创建新的链表
    let head = new Node(linkList[0])
    let tail = head
    for (let i = 1; i < linkList.length; i++) {
        tail.next = new Node(linkList[i])
        tail = tail.next
    }
    return head
    console.log(linkList)
}
console.log(JSON.stringify(reversList(link)))
