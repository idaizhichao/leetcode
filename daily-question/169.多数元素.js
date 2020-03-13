/**
 * @param {number[]} nums
 * @return {number}
 */

// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// 示例 1:

// 输入: [3,2,3]
// 输出: 3 
var majorityElement = function(nums) {
  var map = new Map()
  var mid = nums.length >> 1
  for(item of nums) {
    var count = (map.get(item) || 0) +1
    if( count >= mid) {
      return item
    }
    map.set(item, count)
  }
  return null
}