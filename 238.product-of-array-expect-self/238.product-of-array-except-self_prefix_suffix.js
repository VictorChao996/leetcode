/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 * Note: Time Complexity O(n) without using division operator
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let pre = 1,
		suf = 1;
	const prefix = new Array(nums.length);
	const suffix = new Array(nums.length);
	const result = new Array(nums.length);

	prefix[0] = 1;
	suffix[nums.length - 1] = 1;

	//build prefix
	for (let i = 1; i < nums.length; i++) {
		prefix[i] = nums[i - 1] * pre;
		pre = prefix[i];
	}

	//build suffix
	for (let i = nums.length - 2; i >= 0; i--) {
		suffix[i] = nums[i + 1] * suf;
		suf = suffix[i];
	}

	for (let i = 0; i < nums.length; i++) {
		result[i] = prefix[i] * suffix[i];
	}

	return result;
};
// @lc code=end
