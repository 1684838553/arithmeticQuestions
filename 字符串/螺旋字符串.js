/*
字符串旋转:
给定两字符串A和B，如果能将A从中间某个位置分割为左右两部分字符串（可以为空串），并将左边的字符串移动到右边字符串后面组成新的字符串可以变为字符串B时返回true。

例如：如果A=‘youzan’，B=‘zanyou’，A按‘you’‘zan’切割换位后得到‘zanyou’和B相同，返回true。
再如：如果A=‘abcd’，B=‘abcd’，A切成‘abcd’和''（空串），换位后可以得到B，返回true。
*/



/*
解题思路：
A+A 字符串中包含 B,返回true
*/


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 旋转字符串
 * @param A string字符串 
 * @param B string字符串 
 * @return bool布尔型
 */
export function solve(A: string, B: string): boolean {
    // write code here
    if(A.length !== B.length) return false
    return (A+A).indexOf(B)>-1
}
