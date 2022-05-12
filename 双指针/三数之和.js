/**
 * 给出一个有n个元素的数组S，S中是否有元素a,b,c满足a+b+c=0？找出数组S中所有满足条件的三元组。
 *
 * [-10,0,10,20,-10,-40]
 * [[-10,-10,20],[-10,0,10]]
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let res = []
    if(nums.length < 3) return res

    for(let i = 0;i<nums.length;i++){
        // nums[i] > 0 时，nums[l]和nums[r] 也大于0
        if(nums[i] > 0) return res

        let l = i+1
        let r = nums.length -1

        // 去重操作
        if(i !== 0 && nums[i] === nums[i-1]){
            continue;
        }

        while(l < r){
            let sum = nums[i] + nums[l] + nums[r]
            if(sum === 0){
                res.push([nums[i], nums[l] , nums[r]])
                l++
                r--


                // 去重操作
                while(nums[l] === nums[l-1]){
                    l++
                }

                while(nums[r] === nums[r+1]){
                    r--
                }
            }

            if(sum<0){
                l++
            }

            if(sum>0){
                r--
            }
        }
    }

    return res
};
