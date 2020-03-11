/**
 * @param {number[]} A
 * @return {boolean}
 */
// 双指针 如果左右两边都能组成一部分那么其他剩余的部分也能
var canThreePartsEqualSum = function(A) {
  var sum = A.reduce((per, cur) => per + cur, 0) / 3
  var i = 0
  var j = A.length - 1
  var ci = A[i]
  var cj = A[j]
  while(i + 1 < j) {
    if(ci === sum && cj === sum) {
      return true
    }
    if(ci != sum) {
      ci += A[++i]
    }
    if(cj != sum) {
      cj += A[--j]
    }
  }
  return false
}