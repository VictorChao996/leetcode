/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 * Time Complexity: O(n), n is total node of root tree
 * Space Complexity: O(h), h is height of the tree
 * Note: 巧妙地處理找到 LCA node 時要如何向上傳遞回 root node, 使整個 function 是一個完整的 recursive function 
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
    if(!root)
        return null;
    if(root == q || root == p)
        return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    //當 p & q 同時出現在左右子樹中時
    if(left && right){
        return root;
    }
    //將在左子樹或右子樹尋找 LCA 的結果向上傳遞
    return left || right;
};
// @lc code=end

