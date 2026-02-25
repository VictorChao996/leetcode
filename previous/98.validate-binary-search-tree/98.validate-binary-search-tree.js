/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 * Time Complexity: O(n)
 * Space Complexity: O(2n) = O(n), recursive stack + additional list
 * Note: 先 inorder （left->center->right）遍歷一遍並將 value 存在 array list 中, 再遍歷一遍 array 比較 array 是否有排序過 (asc sorting)
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
 * @return {boolean}
 */
var isValidBST = function (root) {
	if (!root.left && !root.right) return true;

	//traverse tree in inorder and store value to array list
	let array = [];
	function inOrderTraverse(node) {
		if (!node) return;
		inOrderTraverse(node.left);
		array.push(node.val);
		inOrderTraverse(node.right);
		return;
	}
	inOrderTraverse(root);

	//check if the array list is asc sorted
	for (let i = 1; i < array.length; i++) {
		if (array[i - 1] >= array[i]) return false;
	}
	return true;
};
// @lc code=end
