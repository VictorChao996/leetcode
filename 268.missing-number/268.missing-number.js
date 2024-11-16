/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let array = new Array(nums.length + 1).fill(0);

	for (let i = 0; i < nums.length; i++) {
		array[nums[i]]++;
	}
	let result = -1;

	for (let i = 0; i < array.length; i++) {
		if (array[i] == 0) result = i;
	}

	return result;
};
// @lc code=end
