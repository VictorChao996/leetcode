/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 * Time: O(n)
 * Space: O(1), in-place
 * Note: 直接交換兩 pointer 的元素
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
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
        
    return nums;
};
// @lc code=end

