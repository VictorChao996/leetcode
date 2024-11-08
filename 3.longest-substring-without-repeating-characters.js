/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 * * Time Complexity: O(n), one pass array
 * * Space Complexity: O(n), obj_map size up to s.length
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (s.length == 1 || s.length == 0) return s.length;
	let obj_map = {};
	let l = 0,
		r = 1,
		maxLength = 1;
	obj_map[s[0]] = 1;
	while (r < s.length) {
		while (obj_map[s[r]]) {
			obj_map[s[l]] = null;
			l++;
		}
		obj_map[s[r]] = 1;

		if (r - l + 1 > maxLength) maxLength = r - l + 1;
		r++;
	}

	return maxLength;
};
// @lc code=end
