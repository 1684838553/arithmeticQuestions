function longestCommonPrefix( strs ) {
    // write code here
    let len = strs.length
    if(!len) return ''
    strs = [...new Set(strs)]
    let res = ''
    let flag = true
    for(let i = 0;i<strs[0].length;i++){
        let str = strs[0][i]
        for(let j = 0; j<strs.length;j++){
			console.log(i,j,str,'ppp')
            if(strs[j][i] !== str){
                flag = false
                break
            }else{
                flag = true
            }
        }
        if(flag) res += str
    }
   return res
}

console.log(longestCommonPrefix(["abca","abc","abca","abc","abcc"]))
