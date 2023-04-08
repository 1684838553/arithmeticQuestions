/*
给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。

 

示例 1:

输入: s = "aba"
输出: true
示例 2:

输入: s = "abca"
输出: true
解释: 可以删除 "c" 字符 或者 "b" 字符
示例 3:

输入: s = "abc"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/RQku0D
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
**/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let len = s.length
    let l = 0
    let r = len-1

    while(l<r){
        if(s[l] !== s[r]){
            return isPalindrome(s,l+1,r) || isPalindrome(s,l,r-1)
        }
        l++
        r--
    }
    return true
};

const isPalindrome = function(s,l,r){
    while(l<r){
        if(s[l] !== s[r]){
            return false
        }
        l++
        r--
    }
    return true
}
