/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 * Time Complexity: O(n)
 * Space Complexity: O(n), recurrsive call (call stack)
 * Note: DFS (Depth First Search), Recurrsive
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
	if (!root.left && !root.right) return 1;
	return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
// @lc code=end
