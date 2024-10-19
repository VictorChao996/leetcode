/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let result = 0;
	let maxLeft = new Array(height.length).fill(0),
		maxRight = new Array(height.length).fill(0);

	//build maxLeft array
	for (let i = 0; i < height.length; i++) {
		if (i == 0) {
			maxLeft[i] = 0;
			continue;
		}
		maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
	}

	//build maxRight array
	for (let i = height.length - 1; i >= 0; i--) {
		if (i == height.length - 1) {
			maxRight[i] = 0;
			continue;
		}
		maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
	}

	//count area of wafter trap
	for (let i = 0; i < height.length; i++) {
		let temp = Math.min(maxRight[i], maxLeft[i]) - height[i];

		if (temp < 0) temp = 0;
		result += temp;
	}

	return result;
};

// @lc code=end
