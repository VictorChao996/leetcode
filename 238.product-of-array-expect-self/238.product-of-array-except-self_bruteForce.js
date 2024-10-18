/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 * Note: Brute-force, (time limit exceeded)
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let result = [];
	let temp;
	for (let i = 0; i < nums.length; i++) {
		temp = 1;
		for (j = 0; j < nums.length; j++) {
			if (i == j) continue;
			temp *= nums[j];
		}
		result.push(temp);
	}

	return result;
};
// @lc code=end
