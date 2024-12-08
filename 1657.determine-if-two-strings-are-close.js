/*
 * @lc app=leetcode id=1657 lang=javascript
 *
 * [1657] Determine if Two Strings Are Close
 * Time Complexity: O(nlogn), depends on sort method
 * Space Complexity: O(m), 其中 m 表 map 大小, 最差與 word1.length 或 word2.length 相等 -> O(n)
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
	if (word1.length != word2.length) return false;
	let m1 = new Map();
	let m2 = new Map();
	let temp1 = [];
	let temp2 = [];

	//1.build map: count character
	for (let i = 0; i < word1.length; i++) {
		if (!m1.get(word1[i])) {
			m1.set(word1[i], 0);
		}
		if (!m2.get(word2[i])) {
			m2.set(word2[i], 0);
		}
		m1.set(word1[i], m1.get(word1[i]) + 1);
		m2.set(word2[i], m2.get(word2[i]) + 1);
	}
	if (m1.size != m2.size) return false;

	//check if key is the same
	for (const [key, value] of m1) {
		if (!m2.get(key)) return false;
		temp1.push(value);
		temp2.push(m2.get(key));
	}

	//sort & compare the alpha set count
	temp1.sort(function (a, b) {
		return a - b;
	});
	temp2.sort(function (a, b) {
		return a - b;
	});
	for (let i = 0; i < temp1.length; i++) {
		if (temp1[i] != temp2[i]) return false;
	}

	return true;
};
// @lc code=end
