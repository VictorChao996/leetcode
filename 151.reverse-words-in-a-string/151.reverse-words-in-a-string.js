/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 * Time: O(n^2), worst cast using unshift method
 * Space: O(n) 
*/

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let record = [];
    let temp = "";
    for(let i=0; i<s.length; i++){
        if(s[i] == " "){
            if(temp != ""){
                record.unshift(temp);

            }
            temp = "";
            continue;
        }
        temp += s[i];
    }
    if(temp != "")
        record.unshift(temp);

    console.log(record);
    
    let result = record.join(" ");
    
    return result;
};
// @lc code=end

