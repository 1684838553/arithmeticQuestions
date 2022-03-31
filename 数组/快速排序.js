let arr = [5, 65, 6, 8, 1, 5, 9, 45, 78]

function quickSort(arr) {
    // 基数
    let base_num = arr[0]

    let left_arr = []
    let right_arr = []

    // 比较，比基数小放左边，比基数大放右边
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > base_num) {
            right_arr.push(arr[i])
        } else {
            left_arr.push(arr[i])
        }
    }

    // left_arr和right_arr长度大于1，在做比较
    if (left_arr.length >= 2) left_arr = quickSort(left_arr)
    if (right_arr.length >= 2) right_arr = quickSort(right_arr)

    // 合并左右数组
    return left_arr.concat(base_num, right_arr)
}
let res = quickSort(arr)
console.log(res)
