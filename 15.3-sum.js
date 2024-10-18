/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
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
	let l = 0,
		r = nums.length - 1;

	while (l + 1 < r) {
		for (let m = l + 1; m <= r - 1; m++) {
			if (nums[l] + nums[m] + nums[r] == 0) {
				const temp = [l, m, r];
				// console.log("temp", temp);
				result.push(temp);
			}
		}

		if (nums[l] + nums[r] < 0) {
			l++;
		} else if (nums[l] + nums[r] > 0) {
			r--;
		}
	}

	return result;
};
// @lc code=end
