/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 * Time Complexity: O(n + K), K 為 (nums.max - nums.min)
 * Space Complexity: O(n), map 大小, worst case 與 nums 等大
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	const m = new Map();
	let max = -10000000000;
	let min = 10000000000;

	//build m map, find min & map num in the nums array
	for (let i = 0; i < nums.length; i++) {
		m.set(nums[i], 1);
		if (nums[i] > max) {
			max = nums[i];
		}
		if (nums[i] < min) {
			min = nums[i];
		}
	}

	let pointer = min;
	let result = 0;
	let tempResult = 0;

	//iterate value in m map from min to max to find longest consecutive sequence
	while (pointer <= max) {
		if (m.get(pointer)) {
			tempResult++;
		} else {
			if (tempResult > result) {
				result = tempResult;
			}
			tempResult = 0;
		}
		pointer++;
	}
	if (tempResult > result) {
		result = tempResult;
	}

	return result;
};
// @lc code=end
