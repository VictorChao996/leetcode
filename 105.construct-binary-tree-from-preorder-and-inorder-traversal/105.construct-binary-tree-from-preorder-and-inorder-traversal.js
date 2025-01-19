/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 * Time Complexity: O(n^2), indexOf() worst case O(n)
 * Space Complexity: O(n^2), additional array size (n + (n-1) + .... + 2 + 1) => O(n^2)
 * Note: 觀察左右子樹在 preorder & inorder array 中的位置, 並 recursive 解決此問題 
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length == 0 && inorder.length == 0)
        return null;
    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1));

    return root;
};
// @lc code=end

