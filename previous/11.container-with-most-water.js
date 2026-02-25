/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 * Time Complexity: O(n), two pointer 會走完整個 height array
 * Space Complexity: O(1) 沒有額外空間
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let maxAmount = 0;

	let l = 0,
		r = height.length - 1;

	while (l != r) {
		const amout = min(height[l], height[r]) * (r - l);

		if (amout > maxAmount) {
			maxAmount = amout;
		}

		if (height[l] < height[r]) {
			l++;
		} else {
			r--;
		}
	}

	return maxAmount;
};

function min(a, b) {
	if (a >= b) return b;
	return a;
}

// @lc code=end
