/**
 * 需求：
 * 一只青蛙一次可以跳上1级台阶，也可以跳上两级
 * 该青蛙跳上一个n级台阶总共有多少种跳法（次序不同结果不同）
 *
 * 递归类型的题目：
 *
 * 一部直接跳到n级台阶，有哪些方法
 * 1，在n-1级台阶处跳1级
 * 2，在n-2级台阶处跳2级
 *
 * f(n)表示青蛙跳上一个n级的台阶总共的跳法总数
 * f(n) = f(n-1) + f(n-2)
 *
 * 递归类型的题目的注意点：
 * 1，递归的终止条件 （n==1 有一种跳法，n==2 2种跳法）
 * 2， 递归对应的递归表达式
 */

function jumpFloor(n) {
    if (n == 1) return 1
    else if (n == 2) return 2
    return jumpFloor(n - 1) + jumpFloor(n - 2)
}


/**
 * 优化，以上代码在递归过程中会多次计算f(n-1)或f(n-2)
 * 利用以空间换时间的方法，达到优化目的
 * 计算出f(n-1)后存在数组里面
 */
let cache = [, 1, 2]
function jumpFloor2(n) {
    if (cache[n]) return cache[n]
    return cache[n] = jumpFloor2(n - 1) + jumpFloor2(n - 2)
}
console.log(jumpFloor2(9), cache)
