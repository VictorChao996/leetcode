/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 * Time Complexity: O(n * 26)
 * Space Complexity: O(m), m 為 s 中可包含之相異字元數
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let l = 0,
		maxLen = 0;
	const array = new Array(26).fill(0);
	for (let r = 0; r < s.length; r++) {
		array[s[r].charCodeAt(0) - "A".charCodeAt(0)]++;

		//若區間條件不符合, 則移動左指標
		while (r - l + 1 - maxCharAmount(array) > k) {
			array[s[l].charCodeAt(0) - "A".charCodeAt(0)]--;
			l++;
		}

		//更新 maxLen 值
		if (r - l + 1 > maxLen) maxLen = r - l + 1;
	}
	return maxLen;
};

let maxCharAmount = function (array) {
	let result = 0;
	//找區間內出現頻率最高的字母數量
	for (let i = 0; i < 26; i++) {
		if (array[i] > result) result = array[i];
	}
	return result;
};
// @lc code=end
