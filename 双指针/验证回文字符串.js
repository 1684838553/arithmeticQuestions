/*

给定一个字符串，请问最多删除一个的情况下，能否组成一个回文字符串。

回文字符串：正着读和反着读是一样的字符串。

*/ 
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return bool布尔型
 */
function palindrome( str ) {
    // write code here
    // 头尾指针
    let l = 0
    let r = str.length - 1 
    
    while(l<r){
        if(str[l] !== str[r]) {
            // 删除一个字符在判断
            return palindrome1(str,l+1,r) || palindrome1(str,l,r+1)
        }
        r--
        l++
    }
    return true
}

//对撞指针不断判断两边的数字是否相等
function palindrome1(str,l,r){
    while(l<r){
        if(str[l] !== str[r]) {
            return false
        }
        l++
        r--
    }
    return true
}

