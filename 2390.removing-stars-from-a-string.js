/*
 * @lc app=leetcode id=2390 lang=javascript
 *
 * [2390] Removing Stars From a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    for(let i=0; i<s.length; i++){
        if(s[i] == "*"){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }

    let result = "";

    for(let i=0; i < stack.length; i++){
        result += stack[i];
    }

    return result;
};
// @lc code=end

