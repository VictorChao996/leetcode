/**
 * Time Complexity: O(n)
 * Space Complexity: O(1), 若 result array 不算額外的話
 */
class Solution {
	/**
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		let res = "";

		for (let i = 0; i < strs.length; i++) {
			const strLen = strs[i].length;
			res += strLen; //將原文字串的長度記錄下來
			res += "#";
			for (let j = 0; j < strLen; j++) {
				res += strs[i][j];
			}
		}
		console.log(res);
		return res;
	}

	/**
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		let pointerPos = 0;
		const res = [];
		let stringLength = "";
		while (pointerPos < str.length) {
			if (str[pointerPos] != "#") {
				stringLength += str[pointerPos];
			} else {
				const len = parseInt(stringLength);
				let temp = "";
				for (let i = 0; i < len; i++) {
					temp += str[pointerPos + i + 1];
				}
				res.push(temp);
				pointerPos += len;
				stringLength = "";
			}
			pointerPos++;
		}
		return res;
	}
}
