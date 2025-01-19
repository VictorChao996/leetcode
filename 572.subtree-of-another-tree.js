/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 * Time Complexity: O(m*n) where m is the number of nodes in the main tree and n is the number of nodes in the subtree
 * Space Complexity: O(m) where m is the number of nodes in the main tree
 * Note: 因為子樹可能出現在任何地方 (ex, root: [1,1], subRoot: [1]), 所以要針對 root 的每一個節點都做一次 sameTree 的比較, time complexity 便是這麼來的
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const q = [root]
    let current;
    let result = false;
    while(q.length > 0){
        current = q.shift();
        if(current.val == subRoot.val)
           result = result || sameTree(current, subRoot);
        if(current.left)
            q.push(current.left);
        if(current.right)
            q.push(current.right);
    }
    return result;
};

//Note: Time Complexity: O(n) where n is the number of nodes in the tree
function sameTree(n1, n2){
    if(!n1 && !n2)
        return true;
    if(!n1 || !n2 || (n1.val != n2.val))
        return false;

    return sameTree(n1.left, n2.left) && sameTree(n1.right, n2.right);
}
// @lc code=end

