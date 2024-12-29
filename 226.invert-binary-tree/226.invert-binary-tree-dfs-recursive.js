/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 * Time Complexity: O(n)
 * Space Complexity: O(n), recurrsive call (call stack)
 * Note: 使用既有的 tree node, DFS (Depth First Search)
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

	const temp = root.left;
	root.left = invertTree(root.right);
	root.right = invertTree(temp);

	return root;
};
// @lc code=end