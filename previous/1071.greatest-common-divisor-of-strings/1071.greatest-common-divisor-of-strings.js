/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 * Note: Brute Force, 從小的字串開始一一確認 prefix, 若不符合則將比較的 base 長度降低
 * Time: O(min(m, n) * min(m, n)), or O(min(m, n)^2)
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let base = (str1.length > str2.length) ? str2: str1;
    let temp1 = "";
    let temp2 = "";

    while(base.length > 0){
        temp1 = "";
        temp2 = "";
        for(let i=0; i< (Math.floor(str1.length/base.length)); i++){
                temp1 += base;
        }
        for(let i=0; i< (Math.floor(str2.length/base.length)); i++){
                temp2 += base;
        }

        if(temp1 == str1 && temp2 == str2){
                return base;
        }
        base = base.substring(0, base.length-1);
      
    }
    return "";
    
};
// @lc code=end

