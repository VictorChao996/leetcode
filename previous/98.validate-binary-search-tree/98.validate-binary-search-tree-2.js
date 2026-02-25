/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 * Time Complexity: O(n)
 * Space Complexity: O(n), recursive stack
 * Note: 判斷當前 node 是否在合理 left,right 區間內, 並將問題轉換成比較小的子問題 （左右子樹）遞迴判斷即可
 *
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
	function valid(node, leftBound, rightBound) {
		if (!node) return true;
		if (!(leftBound < node.val && node.val < rightBound)) return false;
		return (
			valid(node.left, leftBound, node.val) &&
			valid(node.right, node.val, rightBound)
		);
	}
	return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
// @lc code=end
