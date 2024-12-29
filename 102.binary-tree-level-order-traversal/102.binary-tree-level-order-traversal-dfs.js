/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 * Time Complexity: O(n)
 * Space ComplexityL O(n), recurrsive call (call stack)
 * Note:
 * - DFS approach
 * - 將與 root node 的距離做為參數傳遞下去, 再將 val 直接加進 nested list 即為解答, 注意： level order 的順序為同一 level 的 node 從左至右, 所以 recurrisive 的順序必須先訪問 left 再訪問 right
 * - result 變數要在開頭加上 reset 的動作, 不然不同 testcase 之間的解答會被影響
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

let result = [];
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	result = []; //reset
	levelOrderWithDis(root, 0);
	return result;
};

var levelOrderWithDis = function (root, dis) {
	if (!root) return;
	if (!result[dis]) result[dis] = [];
	result[dis].push(root.val);
	levelOrderWithDis(root.left, dis + 1);
	levelOrderWithDis(root.right, dis + 1);

	return;
};
// @lc code=end
