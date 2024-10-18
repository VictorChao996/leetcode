/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 * Time Complexiy: O(n)
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const result = [];

	//build unorder map on nums
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.get(nums[i]) == null) map.set(nums[i], 0);
		map.set(nums[i], map.get(nums[i]) + 1);
	}

	//build bucket
	//NOTE: 這邊不能直接 fill([]) 因為這樣會導致 bucket 底下的所有 nested array 指向相同 reference,此時使用下方的 push method 加 key 就會同步應用到所有子 [] 上, 就達不到 bucket 的效果
	const bucket = new Array(nums.length + 1).fill(null);
	for (const [key, value] of map) {
		console.log(`key ${key}, value ${value}`);
		if (!bucket[map.get(key)]) {
			bucket[map.get(key)] = [];
		}
		bucket[map.get(key)].push(key);
	}

	//make result from bucket
	//NOTE: bucket 雖是 nested array, 但是可以攤平, 攤平後大小與 map 相同, worst case 為 nums 皆不重複, 此時 nums.length = map.size = bucket 攤平大小, 所以遍歷 bucket 的 time complexity 為 O(n), n 為 nums 大小
	for (let i = bucket.length - 1; i >= 0; i--) {
		if (bucket[i] && bucket[i].length != 0) {
			for (let j = 0; j < bucket[i].length; j++) {
				result.push(bucket[i][j]);
				k--;
				if (k == 0) return result;
			}
		}
	}
};
// @lc code=end
