/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 * Notes: 使用 gcd 輾轉相除法求 gcd string
 * Time: O(m+n), 字串比較 str1 + str2 == str2 + str1
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1){
        return "";
    }

    function gcd(a,b){
        if(b == 0)
            return a;
        return gcd(b, a%b);
    }
    let l1 = str1.length, l2 = str2.length;
    if(l1 < l2){
        let temp = l1;
        l1 = l2;
        l2 = temp;
    }
    return str1.substring(0, gcd(l1, l2));
    
};
// @lc code=end

