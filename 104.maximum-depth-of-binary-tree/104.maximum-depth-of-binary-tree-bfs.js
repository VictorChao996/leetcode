/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 * Time Complexity: O(n)
 * Space Complexity: O(n), recurrsive call (call stack)
 * Note: BFS (Breadth First Search), Recurrsive
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
var maxDepth = function (root) {
	if (!root) return 0;
	const queue = [root];
	let level = 0;
	while (queue.length > 0) {
		const size = queue.length;
		//將下一層 level 的所有 node 都加入到 queue 中
		for (let i = 0; i < size; i++) {
			const node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		level++;
	}
	return level;
};
// @lc code=end
