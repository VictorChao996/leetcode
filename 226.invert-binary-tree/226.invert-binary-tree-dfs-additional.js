/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 * Time: O(n)
 * Space: O(n)
 * Note: 使用額外的 tree node, DFS (Depth First Search)
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (!root) return null;

	const node = new TreeNode(root.val);
	node.left = invertTree(root.right);
	node.right = invertTree(root.left);

	return node;
};
// @lc code=end
