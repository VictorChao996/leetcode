/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
	let result = [];

	for (let i = 0; i < n + 1; i++) {
		result.push(counting(i));
	}

	return result;
};

let counting = function (n) {
	if (n == 0) return 0;

	let total = 0;
	while (n > 1) {
		if (n % 2 == 1) total += 1;
		n = Math.floor(n / 2);
	}
	return total + 1;
};
// @lc code=end
