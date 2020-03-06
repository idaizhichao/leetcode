// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
/**
 * @param {number} target
 * @return {number[][]}
 */
// 使用滑动窗口
var findContinuousSequence = function(target) {
  var left = 1, right = 1, arr =  [], sum = 0
  while(left <= target/2) {
    if(sum < target) {
      sum += right
      right++
    }else if(sum > target) {
      sum-=left
      left++
    }else {
      arr.push(Array(right - left).fill().map((item,index) => index + left))
      sum -= left
      left++
    }
  }
  return arr
}
console.log(findContinuousSequence(15))