/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
 * Time Complexity: O(n)
 * Space Complexity: O(n + 1) => O(n), recursive stack & constant space
 * Note: inorder traversal 解
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	let result = null;
	function inorder(node) {
		if (!node) return;

		inorder(node.left);
		k--;
		if(k == 0)
			result = node.val;
		inorder(node.right);
		return;
	}
	inorder(root);
	return result;
};
// @lc code=end
