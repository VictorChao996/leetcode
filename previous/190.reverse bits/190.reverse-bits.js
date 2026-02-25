/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	const s = reverse(convertToBinaryString(n));
	return convertToInt(s);
};

let convertToBinaryString = function (n) {
	let total = 0;
	let result = "";

	while (n > 1) {
		if (n % 2 == 1) result = "1" + result;
		else result = "0" + result;
		n = Math.floor(n / 2);

		total += 1;
	}
	result = n.toString() + result;
	total += 1;

	while (total < 32) {
		result = "0" + result;
		total += 1;
	}

	return result;
};

let convertToInt = function (s) {
	let result = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] == "1") result += Math.pow(2, 32 - i - 1);
	}

	return result;
};

let reverse = function (s) {
	let result = "";

	for (let i = s.length - 1; i >= 0; i--) {
		result += s[i];
	}

	return result;
};
// @lc code=end
