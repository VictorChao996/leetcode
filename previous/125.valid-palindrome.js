/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 * Time Complexity: O(n)
 * Space Complexity: O(1) ?? O(n)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let s1 = "";
	//build non-alphanumeric characters string
	for (let i = 0; i < s.length; i++) {
		if (
			s.charCodeAt(i) >= "A".charCodeAt(0) &&
			s.charCodeAt(i) <= "Z".charCodeAt(0)
		) {
			s1 += String.fromCharCode(
				s.charCodeAt(i) - "A".charCodeAt(0) + "a".charCodeAt(0)
			);
		} else if (
			(s.charCodeAt(i) >= "a".charCodeAt(0) &&
				s.charCodeAt(i) <= "z".charCodeAt(0)) ||
			(s.charCodeAt(i) >= "0".charCodeAt(0) &&
				s.charCodeAt(i) <= "9".charCodeAt(0))
		) {
			s1 += s[i];
		}
	}
	//check if is palindrome using two pointer
	for (let i = 0; i < s.length / 2 + 1; i++) {
		if (s1[i] != s1[s1.length - 1 - i]) {
			return false;
		}
	}

	return true;
};
// @lc code=end
