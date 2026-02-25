/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 * Time Complexity: O(h), h is height of the tree
 * Space Complexity: O(h), h is height of the tree
 * Note: 利用 Binary Search 的策略選擇要搜尋的 LCA 位置 (位於左子樹或右子樹), 重點：當 current node 的值在當前遞回的 p, q 之間時, root 必為 LCA
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let current = root;

    while(current){
        if(root.val < p.val && root.val < q.val){
            current = current.right;
        }else if(root.val > p.val && root.val > q.val){
            current = current.left;
        }else{
            return current;
        }
    }
    return null;
};
// @lc code=end

