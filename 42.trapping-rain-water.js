/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let result = 0;
	let p1 = 0,
		p2 = 1;
	while (p1 < height.length) {
		console.log(p1, p2);
		//當左指標一開始就為 0
		if (height[p1] == 0) {
			p1++;
			p2++;
			continue;
		}
		//尋找下一個高點的方法, 比 p1 高
		if (height[p2] < height[p1] || height[p2 + 1] > height[p2]) {
			p2++;

			//當 p2 超過陣列大小還有找到合適點時, 移動 p1
			if (p2 > height.length) {
				p1++;
				p2 = p1 + 1;
			}
			continue;
		}

		//找到 p2 位置後開始計算區間 amout
		let amout = min(height[p1], height[p2]) * (p2 - p1 - 1);
		for (let i = p1 + 1; i <= p2 - 1; i++) {
			amout -= height[i];
		}
		// console.log(p1, p2, amout);
		result += amout;

		//更新左指標到下一個高點
		p1 = p2;
		p2 = p2 + 1;
	}

	return result;
};

function min(a, b) {
	if (a >= b) {
		return b;
	}
	return a;
}
// @lc code=end
