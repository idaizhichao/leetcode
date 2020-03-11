/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
输入：[3,2,1,5,6,4] 和 k = 2
输出: 5

选择不是很会到时候再补充。。
*/
var findKthLargest = function(nums, k) {
    nums = quickSort(nums)
    return nums[nums.length - k]
}   
//快排，
const quickSort = function(arr) {
    // 取出中间数，然后将数组遍历一遍  与 中间数坐比较 小的放左边，大的放右边
    if(arr.length <= 1) return arr
    var left = []
    var right = []
    var midIndex = Math.floor(arr.length/2)
    var mid = arr.splice(midIndex,1)[0]
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= mid) {
            right.push(arr[i])
        }else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(mid, quickSort(right))
}
var result = findKthLargest([3,2,1,4,6],2)