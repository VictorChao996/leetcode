/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
	let total = 0;

	if (n == 0) return 0;

	while (n > 1) {
		if (n % 2 == 1) total += 1;

		n = Math.floor(n / 2);
	}

	return total + 1;
};
// @lc code=end
