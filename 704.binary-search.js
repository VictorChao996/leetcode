/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0; r=nums.length-1;
    while(l <= r){
        const m = Math.floor((l+r)/2);
        if(nums[m] == target){
            return m;;
        }else if(nums[m] > target){
            r = m - 1;
        }else{
            l = m + 1;
        }
    }
    return -1;
};
// @lc code=end

