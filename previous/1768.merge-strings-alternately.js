/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 * Time: O(n)
 * Space: O(1)
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let p1 = 0, p2=0;
    let result = "";
    while(p1 < word1.length && p2 < word2.length){
        result += word1[p1];
        result += word2[p2];
        p1++;
        p2++;
    }
    while(p1 < word1.length){
        result += word1[p1];
        p1++;
    }
    while(p2 < word2.length){
        result += word2[p2];
        p2++;
    }

    return result;
};
// @lc code=end

