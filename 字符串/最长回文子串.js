// 最长回文子串

/**
 * 中心扩散法：
 * 子串：奇数长度，偶数长度
 * 
*/


function longestPalindrome(s){
    let res = ''
    for(let i = 0;i<s.length;i++){
        // 奇数
        let left = i - 1,right = i+1
        // 防止越界
        while(left >=0 && right<s.length && s[left] === s[right]){
            right++
            left--
            // 判断长度是否更新
            if(res.length < right - left -1) res = s.substr(left+1,right-left-1)
        }

        // 偶数
        left = i,right = i+1
        // 防止越界
        while(left >=0 && right<s.length && s[left] === s[right]){
            right++
            left--
            // 判断长度是否更新
            if(res.length < right - left -1) res = s.substr(left+1,right-left-1)
        }
    }
    return res
}
