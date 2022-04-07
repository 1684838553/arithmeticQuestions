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
