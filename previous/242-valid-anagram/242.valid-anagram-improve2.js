/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 * Time Complexity: O(n)
 * Space Complexity: O(n), 會產生字串大小的 object (map)
 * Note: 比較兩個 map 是否相同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	let m1 = new Map();
	let m2 = new Map();

	if (s.length != t.length) return false;
	//build the map
	for (let i = 0; i < s.length; i++) {
		if (m1.get(s[i]) == undefined) m1.set(s[i], 0);
		if (m2.get(t[i]) == undefined) m2.set(t[i], 0);
		m1.set(s[i], m1.get(s[i]) + 1);
		m2.set(t[i], m2.get(t[i]) + 1);
	}

	for (let i = 0; i < s.length; i++) {
		if (m1.get(s[i]) != m2.get(s[i])) return false;
	}

	return true;
};
// @lc code=end
