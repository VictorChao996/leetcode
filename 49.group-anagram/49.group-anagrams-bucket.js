/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 * Time Complexity: O(m * n), m 為 strs 的大小, n 為最長的 str[i] 字串長度
 * Space Complexity: O(m)
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let map = new Map();
	let result = [];

	//sort strings in strs
	for (let i = 0; i < strs.length; i++) {
		const count = new Array(26).fill(0);
		for (let c of strs[i]) {
			count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
		}
		const key = count.join(".");
		if (map.get(key) == undefined) map.set(key, []);
		let temp = map.get(key);
		temp.push(strs[i]);
		map.set(key, temp);
	}

	for ([key, value] of map) {
		// console.log(`key: ${key}, value: ${value}`);
		result.push(value);
	}

	return result;
};
// @lc code=end
