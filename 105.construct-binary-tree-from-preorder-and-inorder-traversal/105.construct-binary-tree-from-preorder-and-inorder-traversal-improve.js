/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 * Time Complexity: O(n), recursive 遍歷所有的 node, 每次搜尋利用 hashmap 只要 O(1)
 * Space Complexity: O(n), addtional hashmap size = preorder.length
 * Note: 使用 hashmap 優化 indexOf 的 Time Complexity
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
    const map = new Map();
    let currentNodeIndex = 0;
    //build the inorder index map
    for(let i=0; i<inorder.length; i++){
        map.set(inorder[i], i);
    }

    function dfs_build(left, right){
        if(left > right)
            return null;
        
        let root_val = preorder[currentNodeIndex];
        currentNodeIndex += 1;
        //find indexOf root_val in inorder map
        const mid = map.get(root_val);
        const root = new TreeNode(root_val);
        root.left = dfs_build(left, mid-1);
        root.right = dfs_build(mid+1, right)

        return root;
    }

    return dfs_build(0, inorder.length-1);
};
// @lc code=end

