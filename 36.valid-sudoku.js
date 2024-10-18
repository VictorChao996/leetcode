/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 * Note: 暴力解
 * Time: O(3 * n), n 為 board 大小 (81 個數字)
 * Space: O(1), 需要額外的統計數量 array (大小為 9)
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	let count_array = new Array(9).fill(0);

	//check row
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const num = board[i][j];
			if (num != ".") {
				count_array[num - 1]++;
				if (count_array[num - 1] > 1) {
					return false;
				}
			}
		}
		count_array = new Array(9).fill(0);
	}
	//check column
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const num = board[j][i];
			if (num != ".") {
				count_array[num - 1]++;
				if (count_array[num - 1] > 1) {
					return false;
				}
			}
		}
		count_array = new Array(9).fill(0);
	}
	//check sub-boxes
	for (let i = 0; i < 9; i += 3) {
		for (let j = 0; j < 9; j += 3) {
			for (let k = 0; k < 3; k++) {
				for (let l = 0; l < 3; l++) {
					const num = board[i + k][j + l];
					if (num != ".") {
						count_array[num - 1]++;
						if (count_array[num - 1] > 1) {
							return false;
						}
					}
				}
			}
			count_array = new Array(9).fill(0);
		}
	}

	return true;
};
// @lc code=end
