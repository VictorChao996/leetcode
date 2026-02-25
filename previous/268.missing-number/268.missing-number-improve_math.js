/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 * Time Complexity: O(2n)
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let size = nums.length;
	let total_1 = 0;
	let total_2 = 0;

	//加總計算
	for (let i = 0; i < size; i++) {
		total_1 += nums[i];
	}

	for (let i = 0; i < size + 1; i++) {
		total_2 += i;
	}

	return total_2 - total_1;
};
// @lc code=end
