/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 * Time: O(n)
 * Space: O(n), using queue
 * Note: JavaScript 沒有內建的 queue library, 所以這邊引入 leetcode 也有使用的第三方 library
 */

import { Queue } from "@datastructures-js/queue";

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
	if (!root) return;
	let q = new Queue();
	q.push(root);

	while (q.size() > 0) {
		let node = q.pop(),
			temp;
		temp = node.left;
		node.left = node.right;
		node.right = temp;

		if (node.left != null) q.push(node.left);
		if (node.right != null) q.push(node.right);
	}
	return root;
};
// @lc code=end
