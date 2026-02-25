/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Note: 小優化, 用 map 解決寫死比對符號的問題
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if (s.length % 2 == 1) return false;

	let stack = [];
	let p = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let i = 0; i < s.length; i++) {
		//若 s[i] 為右括號
		if (p[s[i]]) {
			if (stack[stack.length - 1] == p[s[i]]) {
				stack.pop();
			} else {
				return false;
			}
		} else {
			stack.push(s[i]); //左括號放 stack 中
		}
	}
	return stack.length == 0;
};
// @lc code=end
