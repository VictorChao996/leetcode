/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 * Time Complexity: O(2n)
 * Space Complexity: O(1)
 * NOTE: 利用 XOR 的特性 (相同的數字 XOR 會抵銷( a XOR a = 0), 無順序性, 任意數字與 0 XOR 為自己 (a XOR 0 = a)) 可以求出 missing number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let size = nums.length;
	let temp = nums[0];

	for (let i = 1; i < size; i++) {
		temp ^= nums[i];
	}

	for (let i = 0; i < size + 1; i++) {
		temp ^= i;
	}

	return temp;
};
// @lc code=end
