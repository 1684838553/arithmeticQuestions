/**
 * 需求：
 * 一只青蛙一次可以跳上1级台阶，也可以跳上两级,...,也可以跳n级
 * 该青蛙跳上一个n级台阶总共有多少种跳法（次序不同结果不同）
 *
 * 递归类型的题目：
 * 多举几个例子，找规律
 * f(1) = 1
 * f(2) = 2
 * f(3) = f(2) + f(1) + 1
 * f(4) = f(3) + f(2) + f(1) + 1
 * ...
 * 
 * 递归类型的题目的注意点：
 * 1，递归的终止条件 （n==1 有一种跳法，n==2 2种跳法）
 * 2， 递归对应的递归表达式
 */

let cache = [, 1, 2]
function jumpFloor(n) {
    if (cache[n]) return cache[n]
    cache[n] = 1
    for (let i = n - 1; i >= 1; i--) {
        cache[n] += jumpFloor(i)
    }
    return cache[n]
}
console.log(jumpFloor(8), cache)
