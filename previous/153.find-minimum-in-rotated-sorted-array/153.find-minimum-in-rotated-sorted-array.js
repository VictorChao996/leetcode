/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 * Time Complexity: O(logN)
 * Space Complexity: O(1)
 * Note: Binary Search 找出選擇區間的重點 (根據 left, mid, right 三點大小推算最低點的相對位置)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	const len = nums.length;
	if (len == 1) return nums[0];
	if (len == 2) return Math.min(nums[0], nums[1]);
	let left = 0,
		right = len - 1;
	while (true) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] > nums[mid + 1]) return nums[mid + 1];

		if (nums[right] > nums[mid] && nums[mid] > nums[left]) {
			return nums[left];
		} else if (nums[mid] > nums[left] && nums[mid] > nums[right]) {
			left = mid;
		} else if (nums[left] > nums[mid] && nums[right] > nums[mid]) {
			right = mid;
		}
	}
};
// @lc code=end
