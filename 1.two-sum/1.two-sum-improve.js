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
	let temp = {};

	//build map (key: nums value, value: pos)
	for (let i = 0; i < nums.length; i++) {
		temp[nums[i]] = i;
	}

	//find target
	for (let i = 0; i < nums.length; i++) {
		const m = target - nums[i];

		//array item 不會重複使用
		if (i == temp[m]) continue;

		//Note: map 查找 (O(1), 最差 O(n)）
		if (temp[m] != null) {
			return [i, temp[m]];
		}
	}
	return [];
};
// @lc code=end
