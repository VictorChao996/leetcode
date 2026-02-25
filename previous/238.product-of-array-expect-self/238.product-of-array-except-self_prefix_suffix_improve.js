/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 * Note: prefix & suffix improve, no additional space
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let pre = 1,
		suf = 1;
	const result = new Array(nums.length).fill(1);

	//build prefix
	for (let i = 1; i < nums.length; i++) {
		result[i] = nums[i - 1] * pre;
		pre = result[i];
	}

	//make resule with suffix
	for (let i = nums.length - 2; i >= 0; i--) {
		result[i] *= nums[i + 1] * suf;
		suf *= nums[i + 1];
	}

	return result;
};
// @lc code=end
