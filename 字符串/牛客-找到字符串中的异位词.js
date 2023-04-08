/*

描述
给定两个字符串 s 和 p ，请你找到 s 子数组中的全部 p 的异位词的起始点。异位词值可以通过重新排列字符顺序（或者不排列）而相等的词。
你可以以任意顺序返回，字符串中仅包含小写英文字母

示例1
输入：
"cabac","abc"

返回值：
[0,2]


示例2
输入：
"ababab","ab"

返回值：
[0,1,2,3,4]

*/

function findWord( s ,  p ) {
    // write code here
    let len = p.length
    p = p.split('').sort().join('')
    let result = []
   for(let i =0;i<=s.length-len;i++){
       let str = s.substring(i,i+len)
       str = str.split('').sort().join('')
       if(p === str){
           result.push(i)
       }
   }
    return result
}
