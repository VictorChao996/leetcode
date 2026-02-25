/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * NOTE: one-pass simple solution （其實就是 two pointer）
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxProfit = 0;
	let basePos = 0;

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] - prices[basePos] > maxProfit)
			maxProfit = prices[i] - prices[basePos];

		if (prices[i] < prices[basePos]) {
			basePos = i;
		}
	}

	return maxProfit;
};
// @lc code=end
