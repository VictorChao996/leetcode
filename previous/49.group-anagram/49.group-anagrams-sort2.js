/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 * Time Complexity: O(N*LlogL) - (N: strs 陣列大小, LlogL 個別字串排序)
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let sorted_array = [];
	let map = new Map();
	let result = [];

	//sort strings in strs
	for (let i = 0; i < strs.length; i++) {
		const sorted_str = strs[i].split("").sort().join("");
		sorted_array.push(sorted_str);
	}

	//建立 map
	for (let i = 0; i < sorted_array.length; i++) {
		if (map.get(sorted_array[i]) == undefined) {
			map.set(sorted_array[i], []);
		}
		let temp = map.get(sorted_array[i]);
		temp.push(i);
		map.set(sorted_array[i], temp);
	}

	//根據 map 結果返回 result
	for (const [key, value] of map) {
		// console.log(`key: ${key}, value: ${value}`);
		const indexs = value;
		let temp = [];
		for (let i = 0; i < indexs.length; i++) {
			temp.push(strs[indexs[i]]);
		}
		result.push(temp);
	}
	return result;
};
// @lc code=end
