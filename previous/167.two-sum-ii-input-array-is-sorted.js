/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 * Time Complexity: O(n), worst case, 兩數之和在陣列最中間
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let p1 = 0,
		p2 = numbers.length - 1;

	while (true) {
		const twoSum = numbers[p1] + numbers[p2];
		if (twoSum > target) {
			p2--;
		} else if (twoSum < target) {
			p1++;
		} else {
			return [p1 + 1, p2 + 1];
		}
	}
};
// @lc code=end
