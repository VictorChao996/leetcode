/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 * Time: O(n)
 * Space: O(n)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let l=0, r=0;
    let temp = "";
    let result = "";
    for(let i=0; i<s.length; i++){
        if(s[i] == " "){
            if(temp != ""){
                result = temp + " " + result;
            }
            temp = "";
            continue;
        }
        temp += s[i];
    }
    if(temp != "")
        result = temp + " " + result;

    result = result.substring(0, result.length-1);
    
    return result;
};
// @lc code=end

