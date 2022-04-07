/**
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 *
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 *
 * 重要步骤
 * 1, n1 = p.next
 * 2, n2 = p.next.next
 * 3, p.next = n2
 * 4, n1.next = n2.next
 * 5, n2.next = n1
 * 6, p = n1
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let root = new ListNode()
    root.next = head

    let tail = root
    while(tail.next && tail.next.next){
       let n1 = tail.next
       let n2 = tail.next.next

       tail.next = n2
       n1.next = n2.next
       n2.next = n1
       tail = n1
    }

    return root.next
};


/* 
25. K 个一组翻转链表
https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

进阶：

你可以设计一个只使用常数额外空间的算法来解决此问题吗？
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k == 1) return head

    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }

    let len = arr.length
    let num = Math.floor(len / k)
    let rest = len % k
    let temp = []
    for(let i = 0;i<num;i++){
        let group = arr.splice(0,k)
        temp.push(...group.reverse())
    }

    if(rest){
        temp.push(...arr)
    }

    let root = new ListNode()
    let tail = root
    for(let i = 0;i<temp.length;i++){
        tail.next = new ListNode(temp[i])
        tail = tail.next
    }
    return root.next
};
