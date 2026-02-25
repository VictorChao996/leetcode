/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
			stack.push(s[i]);
			continue;
		}
		if (s[i] == ")") {
			if (stack.pop() != "(") return false;
		} else if (s[i] == "]") {
			if (stack.pop() != "[") return false;
		} else if (s[i] == "}") {
			if (stack.pop() != "{") return false;
		}
	}
	if (stack.length > 0) return false;
	return true;
};
// @lc code=end
