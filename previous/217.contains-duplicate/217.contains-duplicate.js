/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Notes: 與 1. Two Sum 類似, 都是使用 hash-map 解
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const obj = {};

	//build hash map
	for (let i = 0; i < nums.length; i++) {
		obj[nums[i]] = i;
	}

	//search on hash map
	for (let i = 0; i < nums.length; i++) {
		const value = nums[i];
		if (obj[value] != null && obj[value] !== i) return true;
	}

	return false;
};
// @lc code=end
