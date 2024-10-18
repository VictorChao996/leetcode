/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 * Time Complexiy: O(K * n), n 為 map_obj 大小 (最差與 nums 等大)
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	//build unorder map on nums
	const map_obj = {};
	for (let i = 0; i < nums.length; i++) {
		if (map_obj[nums[i]] == null) map_obj[nums[i]] = 0;
		map_obj[nums[i]]++;
	}

	let obj_keys = Object.keys(map_obj);
	//return array of elements by K
	const result = [];
	while (result.length < k) {
		let largest_index = 0;
		for (let j = 1; j < obj_keys.length; j++) {
			if (map_obj[obj_keys[j]] > map_obj[obj_keys[largest_index]]) {
				largest_index = j;
			}
		}
		result.push(parseInt(obj_keys[largest_index]));
		//NOTE: remove count to find next largest index
		map_obj[obj_keys[largest_index]] = 0;
	}

	return result;
};
// @lc code=end
