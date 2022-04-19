/**
 * https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3?tpId=196&tqId=37094&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fdifficulty%3D1%26page%3D1%26pageSize%3D50%26search%3D%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D196&difficulty=1&judgeStatus=undefined&tags=593&title=
 * 描述
大家都知道斐波那契数列，现在要求输入一个正整数 n ，请你输出斐波那契数列的第 n 项。

输入描述：
一个正整数n
返回值描述：
输出一个正整数。
 */

let arr = [, 1, 1]
function Fibonacci(n) {
    if (arr[n]) return arr[n]
    return arr[n] = Fibonacci(n - 1) + Fibonacci(n - 2)
}
module.exports = {
    Fibonacci: Fibonacci
};
