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
	if (s.length != t.length) return false;

	const obj1 = {};
	const obj2 = {};
	const size = s.length;

	//init map obj
	for (let i = 0; i < size; i++) {
		obj1[s[i]] = 0;
		obj2[t[i]] = 0;
	}
	//build map obj (count character value)
	for (let i = 0; i < size; i++) {
		obj1[s[i]]++;
		obj2[t[i]]++;
	}
	//compare two maps
	for (let i = 0; i < size; i++) {
		if (obj1[s[i]] != obj2[s[i]]) return false;
	}

	return true;
};
// @lc code=end
