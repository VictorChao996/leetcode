/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n), 會產生字串大小的陣列
 * Note: 直接 sort 字串中的字母後比對字串是否相同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	const a = s.split("").sort().join("");
	const b = t.split("").sort().join("");
	if (a == b) {
		return true;
	}

	return false;
};
// @lc code=end
