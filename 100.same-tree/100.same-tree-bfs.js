/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Notes: BFS implement
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	const q1 = new Queue();
	const q2 = new Queue();
	q1.push(p);
	q2.push(q);
	let n1, n2;

	while (q1.size() > 0 && q2.size() > 0) {
		n1 = q1.pop();
		n2 = q2.pop();

		if (!n1 && !n2) continue;
		if (!n1 || !n2) return false;
		if (n1.val != n2.val) return false;

		q1.push(n1.left);
		q1.push(n1.right);
		q2.push(n2.left);
		q2.push(n2.right);
	}
	return true;
};
// @lc code=end
