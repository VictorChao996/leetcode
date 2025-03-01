/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 * Time: O(n), n = t.length
 * Space: O(1)
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0;

    for(let i=0; i<t.length; i++){
        if(s[i] == t[j]){
            j++;
            if(j == s.length)
                break;
        }
    }

    return j == s.length;
};
// @lc code=end

