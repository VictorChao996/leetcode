/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 * Time Complexity: O(logN)
 * Space Complexity: O(1)
 * Note: Binary Search 找出選擇區間的重點 (看 Mid 是在 left sorted 區間或 right sorted 區間來選擇下一個區間), m 在左區間： 因為選轉的特性, 最小值一定會出現在右 sorted 區間的位置, 所以選擇向 m 的右半區搜索, 反之當 ｍ 在右 sorted 區間內時, 最小值會出現在 m 的左側, 所以往左半側搜尋 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let result = nums[0];
	let l = 0, r=nums.length-1;
	while(l <= r){
		if(nums[l] < nums[r]){
			result = Math.min(result, nums[l]);
			break;
		}
		let m = Math.floor((l+r)/2);
		result = Math.min(result, nums[m]);
		if(nums[m] >= nums[l]){
			l = m + 1;
		}else{
			r = m - 1;
		}
	}
	return result;
};
// @lc code=end
