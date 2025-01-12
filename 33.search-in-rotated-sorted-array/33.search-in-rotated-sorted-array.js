/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 * Time Complexity: O(logN)
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0,
		right = nums.length - 1;

	while (left <= right) {
		console.log(left, right);
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] == target) return mid;

		//mid 在左 sorted 區間
		if (nums[left] <= nums[mid]) {
			//當符合此條件時, target 預計會出現在右半區
			if (target < nums[left] || target > nums[mid]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		} //mid 在右 sorted 區間
		else {
			//當符合此條件時, target 預計會出現在左區間
			if (target < nums[mid] || target > nums[right]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
	}
	return -1;
};
// @lc code=end
