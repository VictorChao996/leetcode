/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 * Time Complexity: O(n)
 * Space Complexity O(n), queue
 * Note:
 * - BFS approach
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];
	const result = [];
	const q = new Queue();
	q.push(root);

	while (q.size() > 0) {
		const size = q.size();
		const temp = [];
		for (let i = 0; i < size; i++) {
			const node = q.pop();
			temp.push(node.val);

			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
		}
		result.push(temp);
	}
	return result;
};

// @lc code=end
