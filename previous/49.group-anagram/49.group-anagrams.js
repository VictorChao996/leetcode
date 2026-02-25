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
	let sort_array = [];
	let map_obj = new Map();
	let result = [];
	//sort 陣列內部字串
	for (let i = 0; i < strs.length; i++) {
		const sort_str = strs[i].split("").sort().join("");
		sort_array.push(sort_str);
	}

	//建立 map_obj, 找出互為 anagram 的 index
	for (let i = 0; i < strs.length; i++) {
		if (map_obj[sort_array[i]] == null) {
			map_obj[sort_array[i]] = [i];
		} else {
			// const temp_array = map_obj[sort_array[i]];
			// map_obj[sort_array[i]] = temp_array.push(i);
			map_obj[sort_array[i]].push(i);
		}
	}

	//NOTE: 因為 JS 不是 iterable, 所以可以這樣直接取得 key array & obj size
	const map_obj_keys = Object.keys(map_obj);
	//根據 map_obj 來建立 return result
	for (let i = 0; i < map_obj_keys.length; i++) {
		const temp = [];
		const index_array = map_obj[map_obj_keys[i]];

		for (let j = 0; j < index_array.length; j++) {
			temp.push(strs[index_array[j]]);
		}
		result.push(temp);
	}

	return result;
};
// @lc code=end
