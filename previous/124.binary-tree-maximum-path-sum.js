/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n) (worst case skewed tree), O(logN) (balanced tree)
 * Note: 明白 path 的定義並列出所有需要計算的可能性, 避免 Bottom Up 時回傳的值包含不合法 path 的可能, 然後正常 dfs 遍歷所有 node 去尋找 max result 即可
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
	let result = -1001;

	//find valid max path for current node
	function traverse(node) {
		if (!node) return 0;

		let maxLeft = traverse(node.left);
		let maxRight = traverse(node.right);
		const maxPathCurrentNode = Math.max(
			node.val + maxLeft,
			node.val + maxRight,
			node.val + maxLeft + maxRight,
			node.val
		);
		//Note: max valid path 可能出現在 tree 的任意位置, 持續更新紀錄最大值
		if (maxPathCurrentNode > result) result = maxPathCurrentNode;

		//Note: 對於此 node 的 parent node 來說, 只有以下三種能與 parent 形成 valid path
		return Math.max(node.val + maxLeft, node.val + maxRight, node.val);
	}
	const temp = traverse(root);
	if (temp > result) result = temp;
	return result;
};
// @lc code=end
