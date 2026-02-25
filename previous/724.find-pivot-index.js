/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 * Time: O(n)
 * Space: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let l=0, r=0;
    for(let i=0; i<nums.length;i++){
        r += nums[i];
    }

    for(let i=0; i<nums.length; i++){
        r -= nums[i];
        if(l == r)
            return i;
        l += nums[i];

    }

    return -1;
};
// @lc code=end

