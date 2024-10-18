/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Notes: 小優化, 將 build & search 放在同一個迴圈中, 找到就直接 return
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
		//init & search map
		if (obj[nums[i]] == null) {
			obj[nums[i]] = 1;
		} else {
			return true;
		}
	}

	return false;
};
// @lc code=end
