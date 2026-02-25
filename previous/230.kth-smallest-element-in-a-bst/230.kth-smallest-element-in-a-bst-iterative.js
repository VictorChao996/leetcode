/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
 * Time Complexity: O(n)
 * Space Complexity: O(n + 1), stack
 * Note: inorder, iterative 解
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
	const stack = [];
	let node = root;
	while(node || stack.length > 0){
		while(node){
			stack.push(node);
			node = node.left;
		}
		node = stack.pop();
		k--;
		if(k == 0)
			return node.val;
		node = node.right;
	}

};
// @lc code=end
