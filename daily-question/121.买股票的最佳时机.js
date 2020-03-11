/**
 * @param {number[]} prices
 * @return {number}
 */

/*
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
*/
// 求数组中最大差值是多少
var maxProfit = function(prices) {
    if(prices.length < 2) {
        return 0
    }
    var result = 0
    var min = prices[0]
    for(var i = 0; i < prices.length; i++) {
        result = Math.max(result, prices[i] - min)
        min = Math.min(min, prices[i])
    }
    return result
};