/*
 * @lc app=leetcode id=1732 lang=javascript
 *
 * [1732] Find the Highest Altitude
 * Time: O(n)
 * Space: O(1)
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0, current = 0;

    for(let i=0; i<gain.length; i++){
        current += gain[i];
        if(current > max)
            max = current;
    }

    return max;
};
// @lc code=end

