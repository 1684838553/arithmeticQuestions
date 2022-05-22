/**
   题目链接 ： https://leetcode.cn/problems/baby-names-lcci/
 * @param {string[]} names
 * @param {string[]} synonyms
 * @return {string[]}
 */
var trulyMostPopular = function(names, synonyms) {
    const nameMap = new Map, numMap = new Map, reg = /([\s\S]+)\(([0-9]+)\)/g
    
    // 记录名字别名
    for (const synonym of synonyms) {
        const [name1, name2] = synonym.slice(1, -1).split(',')

        // 合并相同名字并排序
        const arr1 = nameMap.get(name1) || [], 
              arr2 = nameMap.get(name2) || [], 
              allArr = [...new Set(arr1.concat(arr2, name1, name2))].sort((a, b) => a.localeCompare(b))
        
        for (const ar of allArr) {
            console.log(ar,allArr,'aaaaaa')
            nameMap.set(ar, allArr)
        }

        console.log(nameMap)
    }

    // 计数
    for (const name of names) {
        const arr = Array.from(name.matchAll(reg))[0]
        let n = arr[1]
        const num = arr[2]
        if(nameMap.has(n)) {
            n = nameMap.get(n)[0]
        }
        numMap.set(n, (numMap.get(n) || 0) + +num)
    }

    const ret = []

    // 输出计数
    for (const [name, count] of numMap) {
        ret.push(`${name}(${count})`)
    }

    return ret
};
