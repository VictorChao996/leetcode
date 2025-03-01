/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 * Time: O(n)
 * Space: O(1), in-place
 * Note: 先覆蓋, 最後再將 0 補回去
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] != 0){
            nums[j] = nums[i];
            j++;
        }
    }

    for(let o=j; o<nums.length; o++){
        nums[o] = 0;
    }

        
    return nums;
};
// @lc code=end

