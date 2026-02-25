/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 * Time Complexity: O(n), n is the total node in a root tree
 * Space Complexity: O(h+a) => O(h), h is the height of the tree, a is the temp array size (not bigger than h)
 * Note: 紀錄 ACS 發生的位置並將其紀錄在 temp array 中, Bottom Up 由下而上第一個符合條件的即為解答 (temp[0])
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
    let temp = [];
    function bst(node){
        if(!node)
            return false;
        let leftResult = bst(node.left);
        let rightResult = bst(node.right);

        let result = false;
        if(node == p || node == q)
            result = true;
        
        if((leftResult && rightResult) || (result && leftResult) || (result && rightResult)){
            temp.push(node);
        }
        return leftResult || rightResult || result;
    }
    bst(root);
    // console.log(temp)
    return temp[0];
};
// @lc code=end

