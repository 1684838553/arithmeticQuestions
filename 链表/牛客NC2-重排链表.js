/*
 * https://www.nowcoder.com/practice/3d281dc0b3704347846a110bf561ef6b?tpId=196&tqId=37046&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D196&difficulty=undefined&judgeStatus=undefined&tags=&title=
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return void
 */
function reorderList( head ) {
    // write code here
    let headArr = []
    while(head){
        headArr.push(head.val)
        head = head.next
    }
    
    let reBuild = []
    function reBuildArr(reBuild,arr){
         reBuild.push(arr.shift())
        if(arr.length){
            reBuild.push(arr.pop()) 
        }
        
        if(arr.length) reBuildArr(reBuild,arr)
    }
    
    if(headArr.length) reBuildArr(reBuild,headArr)
    
    head = new ListNode(0)
    let tail = head

    for(let i = 0;i<reBuild.length;i++){
         tail.next = new ListNode(reBuild[i])
         tail = tail.next
    }
    
    //console.log(JSON.stringify(head))
    return head.next
}
module.exports = {
    reorderList : reorderList
};
