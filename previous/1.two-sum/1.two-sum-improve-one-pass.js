/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let size = nums.length;
	let map = new Map();

	for (let i = 0; i < size; i++) {
		if (map.get(target - nums[i]) != undefined) {
			return [i, map.get(target - nums[i])];
		}
		map.set(nums[i], i);
	}
};
// @lc code=end
