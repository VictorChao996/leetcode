/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 * Note: Division Operator
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let prod = 1;
	let zeroCount = 0;

	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) prod *= nums[i];
		else zeroCount++;
	}
	// console.log(zeroCount);
	if (zeroCount >= 2) {
		return new Array(nums.length).fill(0);
	}

	for (let i = 0; i < nums.length; i++) {
		if (zeroCount == 1) {
			if (nums[i] != 0) {
				result.push(0);
			} else {
				result.push(prod);
			}
		} else {
			result.push(prod / nums[i]);
		}
	}

	return result;
};
// @lc code=end
