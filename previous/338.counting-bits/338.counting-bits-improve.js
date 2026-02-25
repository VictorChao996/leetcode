/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 * Time Complexity: O(n)
 * Space Complexity: O(n) or O(1) (看 return array 算不算 additional space)
 * Note: DP 解, 找出 counting bits 規則後 bottom up 建立 dp array 即為解答
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
	let result = new Array(n + 1).fill(0);
	let offset = 1;

	for (let i = 1; i < n + 1; i++) {
		if (offset * 2 == i) offset *= 2;

		result[i] = 1 + result[i - offset];
	}

	return result;
};

// @lc code=end
