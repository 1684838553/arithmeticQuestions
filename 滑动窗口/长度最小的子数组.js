/*

给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
https://leetcode.cn/problems/minimum-size-subarray-sum/

*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const len = nums.length
    let l = 0 , r = 0, sum = 0
    // 最大窗口不会超过自身长度
    let res = len + 1
    while(r < len){
        sum += nums[r]
        // 扩大窗口
        r++
        while(sum>= target){
            // 更新最小值，r在进入该while语句前，自增1
            res = res < r-l ? res : r-l
            sum -= nums[l]
            // 缩小窗口
            l++
        }
    }
    return res > len ? 0 : res
};
