/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 * Time Complexity: O(nlogn) + O(n^2) -> O(n^2)
 * Space Complexity: O(1) or O(n), depends on sort
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	const result = [];

	nums.sort((a, b) => {
		return a - b;
	});
	console.log(nums);

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) break;
		//NOTE: avoid duplicate combination
		if (nums[i] == nums[i - 1]) {
			continue;
		}

		let l = i + 1,
			r = nums.length - 1;

		//NOTE: sorted two sum problem with two pointer
		while (l < r) {
			const sum = nums[i] + nums[l] + nums[r];
			if (sum == 0) {
				result.push([nums[i], nums[l], nums[r]]);
				l++;
				//NOTE: avoid duplicate combination
				while (nums[l] === nums[l - 1] && l < r) {
					l++;
				}
			} else if (sum > 0) {
				r--;
			} else {
				l++;
			}
		}
	}

	return result;
};
// @lc code=end
