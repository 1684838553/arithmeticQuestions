/**
 * 给出一个长度为 n 的单链表和一个值 x ，单链表的每一个值为 listi ，请返回一个链表的头结点，要求新链表中小于 x 的节点全部在大于等于 x 的节点左侧，并且两个部分之内的节点之间与原来的链表要保持相对顺序不变。

例如：
给出 1 \to 4 \to 3 \to 2 \to 5 \to 21→4→3→2→5→2 和 x = 3x=3
返回 1 \to 2 \to 2 \to 4 \to 3 \to 51→2→2→4→3→5
*/

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

// 方法一
function partition(head, x) {
  // write code here
  if (!head) return null;
  let minHead = new ListNode(0);
  let minTail = minHead;
  let maxHead = new ListNode(0);
  let maxTail = maxHead;

  while (head) {
    if (head.val < x) {
      minTail.next = new ListNode(head.val);
      minTail = minTail.next;
    } else {
      maxTail.next = new ListNode(head.val);
      maxTail = maxTail.next;
    }
    head = head.next;
  }

  minTail.next = maxHead.next;
  return minHead.next;
}

// 方法二
function partition(head, x) {
  // write code here
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let temp = [[], []];
  arr.forEach((item) => {
    if (item < x) {
      temp[0].push(item);
    } else {
      temp[1].push(item);
    }
  });
  temp = temp.flat();

  let phead = new ListNode(0);
  let tail = phead;
  for (let i = 0; i < temp.length; i++) {
    tail.next = new ListNode(temp[i]);
    tail = tail.next;
  }

  return phead.next;
}
